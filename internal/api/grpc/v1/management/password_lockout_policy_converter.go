package management

import (
	"context"

	"github.com/caos/logging"
	"github.com/caos/zitadel/internal/api/authz"
	"github.com/caos/zitadel/internal/domain"
	"github.com/caos/zitadel/internal/eventstore/v1/models"
	iam_model "github.com/caos/zitadel/internal/iam/model"
	"github.com/caos/zitadel/pkg/grpc/management"
	"github.com/golang/protobuf/ptypes"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func passwordLockoutPolicyRequestToDomain(ctx context.Context, policy *management.PasswordLockoutPolicyRequest) *domain.PasswordLockoutPolicy {
	return &domain.PasswordLockoutPolicy{
		ObjectRoot: models.ObjectRoot{
			AggregateID: authz.GetCtxData(ctx).OrgID,
		},
		MaxAttempts:         policy.MaxAttempts,
		ShowLockOutFailures: policy.ShowLockoutFailure,
	}
}

func passwordLockoutPolicyFromDomain(policy *domain.PasswordLockoutPolicy) *management.PasswordLockoutPolicy {
	return &management.PasswordLockoutPolicy{
		MaxAttempts:        policy.MaxAttempts,
		ShowLockoutFailure: policy.ShowLockOutFailures,
		ChangeDate:         timestamppb.New(policy.ChangeDate),
	}
}

func passwordLockoutPolicyViewFromModel(policy *iam_model.PasswordLockoutPolicyView) *management.PasswordLockoutPolicyView {
	creationDate, err := ptypes.TimestampProto(policy.CreationDate)
	logging.Log("GRPC-4Bms9").OnError(err).Debug("date parse failed")

	changeDate, err := ptypes.TimestampProto(policy.ChangeDate)
	logging.Log("GRPC-6Hmlo").OnError(err).Debug("date parse failed")

	return &management.PasswordLockoutPolicyView{
		Default:            policy.Default,
		MaxAttempts:        policy.MaxAttempts,
		ShowLockoutFailure: policy.ShowLockOutFailures,
		ChangeDate:         changeDate,
		CreationDate:       creationDate,
	}
}