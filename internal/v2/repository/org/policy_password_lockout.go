package org

import (
	"github.com/caos/zitadel/internal/eventstore/v2"
	"github.com/caos/zitadel/internal/v2/repository/policy/password_lockout"
)

var (
	PasswordLockoutPolicyAddedEventType   = orgEventTypePrefix + password_lockout.PasswordLockoutPolicyAddedEventType
	PasswordLockoutPolicyChangedEventType = orgEventTypePrefix + password_lockout.PasswordLockoutPolicyChangedEventType
)

type PasswordLockoutPolicyReadModel struct {
	password_lockout.PasswordLockoutPolicyReadModel
}

func (rm *PasswordLockoutPolicyReadModel) AppendEvents(events ...eventstore.EventReader) {
	for _, event := range events {
		switch e := event.(type) {
		case *PasswordLockoutPolicyAddedEvent:
			rm.ReadModel.AppendEvents(&e.PasswordLockoutPolicyAddedEvent)
		case *PasswordLockoutPolicyChangedEvent:
			rm.ReadModel.AppendEvents(&e.PasswordLockoutPolicyChangedEvent)
		case *password_lockout.PasswordLockoutPolicyAddedEvent, *password_lockout.PasswordLockoutPolicyChangedEvent:
			rm.ReadModel.AppendEvents(e)
		}
	}
}

type PasswordLockoutPolicyAddedEvent struct {
	password_lockout.PasswordLockoutPolicyAddedEvent
}

type PasswordLockoutPolicyChangedEvent struct {
	password_lockout.PasswordLockoutPolicyChangedEvent
}
