package query

import (
	"github.com/caos/zitadel/internal/eventstore/v2"
	"github.com/caos/zitadel/internal/v2/repository/policy"
)

type PasswordLockoutPolicyReadModel struct {
	eventstore.ReadModel

	MaxAttempts         uint64
	ShowLockOutFailures bool
}

func (rm *PasswordLockoutPolicyReadModel) Reduce() error {
	for _, event := range rm.Events {
		switch e := event.(type) {
		case *policy.PasswordLockoutPolicyAddedEvent:
			rm.MaxAttempts = e.MaxAttempts
			rm.ShowLockOutFailures = e.ShowLockOutFailures
		case *policy.PasswordLockoutPolicyChangedEvent:
			rm.MaxAttempts = e.MaxAttempts
			rm.ShowLockOutFailures = e.ShowLockOutFailures
		}
	}
	return rm.ReadModel.Reduce()
}