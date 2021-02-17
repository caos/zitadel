package command

import (
	"context"

	caos_errs "github.com/caos/zitadel/internal/errors"
	"github.com/caos/zitadel/internal/v2/domain"
	"github.com/caos/zitadel/internal/v2/repository/org"
)

func (r *CommandSide) getOrgPasswordComplexityPolicy(ctx context.Context, orgID string) (*domain.PasswordComplexityPolicy, error) {
	policy := NewOrgPasswordComplexityPolicyWriteModel(orgID)
	err := r.eventstore.FilterToQueryReducer(ctx, policy)
	if err != nil {
		return nil, err
	}
	if policy.State == domain.PolicyStateActive {
		return orgWriteModelToPasswordComplexityPolicy(policy), nil
	}
	return r.getDefaultPasswordComplexityPolicy(ctx)
}

func (r *CommandSide) AddPasswordComplexityPolicy(ctx context.Context, resourceOwner string, policy *domain.PasswordComplexityPolicy) (*domain.PasswordComplexityPolicy, error) {
	if err := policy.IsValid(); err != nil {
		return nil, err
	}
	addedPolicy := NewOrgPasswordComplexityPolicyWriteModel(resourceOwner)
	err := r.eventstore.FilterToQueryReducer(ctx, addedPolicy)
	if err != nil {
		return nil, err
	}
	if addedPolicy.State == domain.PolicyStateActive {
		return nil, caos_errs.ThrowAlreadyExists(nil, "Org-LdhbS", "Errors.Org.PasswordComplexityPolicy.AlreadyExists")
	}

	orgAgg := OrgAggregateFromWriteModel(&addedPolicy.WriteModel)
	pushedEvents, err := r.eventstore.PushEvents(
		ctx,
		org.NewPasswordComplexityPolicyAddedEvent(
			ctx,
			orgAgg,
			policy.MinLength,
			policy.HasLowercase,
			policy.HasUppercase,
			policy.HasNumber,
			policy.HasSymbol))
	if err != nil {
		return nil, err
	}
	err = AppendAndReduce(addedPolicy, pushedEvents...)
	if err != nil {
		return nil, err
	}
	return writeModelToPasswordComplexityPolicy(&addedPolicy.PasswordComplexityPolicyWriteModel), nil
}

func (r *CommandSide) ChangePasswordComplexityPolicy(ctx context.Context, resourceOwner string, policy *domain.PasswordComplexityPolicy) (*domain.PasswordComplexityPolicy, error) {
	if err := policy.IsValid(); err != nil {
		return nil, err
	}

	existingPolicy := NewOrgPasswordComplexityPolicyWriteModel(resourceOwner)
	err := r.eventstore.FilterToQueryReducer(ctx, existingPolicy)
	if err != nil {
		return nil, err
	}
	if existingPolicy.State == domain.PolicyStateUnspecified || existingPolicy.State == domain.PolicyStateRemoved {
		return nil, caos_errs.ThrowNotFound(nil, "ORG-Dgs3g", "Errors.Org.PasswordComplexityPolicy.NotFound")
	}

	orgAgg := OrgAggregateFromWriteModel(&existingPolicy.PasswordComplexityPolicyWriteModel.WriteModel)
	changedEvent, hasChanged := existingPolicy.NewChangedEvent(ctx, orgAgg, policy.MinLength, policy.HasLowercase, policy.HasUppercase, policy.HasNumber, policy.HasSymbol)
	if !hasChanged {
		return nil, caos_errs.ThrowPreconditionFailed(nil, "Org-DAs21", "Errors.Org.PasswordComplexityPolicy.NotChanged")
	}

	pushedEvents, err := r.eventstore.PushEvents(ctx, changedEvent)
	if err != nil {
		return nil, err
	}
	err = AppendAndReduce(existingPolicy, pushedEvents...)
	if err != nil {
		return nil, err
	}
	return writeModelToPasswordComplexityPolicy(&existingPolicy.PasswordComplexityPolicyWriteModel), nil
}

func (r *CommandSide) RemovePasswordComplexityPolicy(ctx context.Context, orgID string) error {
	existingPolicy := NewOrgPasswordComplexityPolicyWriteModel(orgID)
	err := r.eventstore.FilterToQueryReducer(ctx, existingPolicy)
	if err != nil {
		return err
	}
	if existingPolicy.State == domain.PolicyStateUnspecified || existingPolicy.State == domain.PolicyStateRemoved {
		return caos_errs.ThrowNotFound(nil, "ORG-ADgs2", "Errors.Org.PasswordComplexityPolicy.NotFound")
	}
	orgAgg := OrgAggregateFromWriteModel(&existingPolicy.WriteModel)
	_, err = r.eventstore.PushEvents(ctx, org.NewPasswordComplexityPolicyRemovedEvent(ctx, orgAgg))
	return err
}