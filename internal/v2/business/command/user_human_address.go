package command

import (
	"context"
	caos_errs "github.com/caos/zitadel/internal/errors"
	"github.com/caos/zitadel/internal/telemetry/tracing"
	usr_model "github.com/caos/zitadel/internal/user/model"
	"github.com/caos/zitadel/internal/v2/business/domain"
)

func (r *CommandSide) ChangeHumanAddress(ctx context.Context, address *usr_model.Address) (*usr_model.Address, error) {
	existingAddress, err := r.addressWriteModel(ctx, address.AggregateID)
	if err != nil {
		return nil, err
	}
	if existingAddress.UserState == domain.UserStateUnspecified || existingAddress.UserState == domain.UserStateDeleted {
		return nil, caos_errs.ThrowAlreadyExists(nil, "COMMAND-0pLdo", "Errors.User.Address.NotFound")
	}
	changedEvent, hasChanged := existingAddress.NewChangedEvent(ctx, address.Country, address.Locality, address.PostalCode, address.Region, address.StreetAddress)
	if !hasChanged {
		return nil, caos_errs.ThrowAlreadyExists(nil, "COMMAND-3M0cs", "Errors.User.Address.NotChanged")
	}
	userAgg := UserAggregateFromWriteModel(&existingAddress.WriteModel)
	userAgg.PushEvents(changedEvent)

	err = r.eventstore.PushAggregate(ctx, existingAddress, userAgg)
	if err != nil {
		return nil, err
	}

	return writeModelToAddress(existingAddress), nil
}

func (r *CommandSide) addressWriteModel(ctx context.Context, userID string) (writeModel *HumanAddressWriteModel, err error) {
	ctx, span := tracing.NewSpan(ctx)
	defer func() { span.EndWithError(err) }()

	writeModel = NewHumanAddressWriteModel(userID)
	err = r.eventstore.FilterToQueryReducer(ctx, writeModel)
	if err != nil {
		return nil, err
	}
	return writeModel, nil
}