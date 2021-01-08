package command

import (
	"context"
	"github.com/caos/zitadel/internal/crypto"
	"github.com/caos/zitadel/internal/eventstore/v2"
	"github.com/caos/zitadel/internal/v2/domain"
	"github.com/caos/zitadel/internal/v2/repository/user"
	"time"
)

type HumanEmailWriteModel struct {
	eventstore.WriteModel

	Email           string
	IsEmailVerified bool

	Code             *crypto.CryptoValue
	CodeCreationDate time.Time
	CodeExpiry       time.Duration

	UserState domain.UserState
}

func NewHumanEmailWriteModel(userID string) *HumanEmailWriteModel {
	return &HumanEmailWriteModel{
		WriteModel: eventstore.WriteModel{
			AggregateID: userID,
		},
	}
}

func (wm *HumanEmailWriteModel) AppendEvents(events ...eventstore.EventReader) {
	for _, event := range events {
		switch e := event.(type) {
		case *user.HumanEmailChangedEvent:
			wm.AppendEvents(e)
		case *user.HumanEmailCodeAddedEvent:
			wm.AppendEvents(e)
		case *user.HumanEmailVerifiedEvent:
			wm.AppendEvents(e)
		case *user.HumanAddedEvent, *user.HumanRegisteredEvent:
			wm.AppendEvents(e)
		case *user.UserRemovedEvent:
			wm.AppendEvents(e)
		}
	}
}

func (wm *HumanEmailWriteModel) Reduce() error {
	for _, event := range wm.Events {
		switch e := event.(type) {
		case *user.HumanAddedEvent:
			wm.Email = e.EmailAddress
			wm.UserState = domain.UserStateInitial
		case *user.HumanRegisteredEvent:
			wm.Email = e.EmailAddress
			wm.UserState = domain.UserStateInitial
		case *user.HumanEmailChangedEvent:
			wm.Email = e.EmailAddress
			wm.IsEmailVerified = false
			wm.Code = nil
		case *user.HumanEmailCodeAddedEvent:
			wm.Code = e.Code
			wm.CodeCreationDate = e.CreationDate()
			wm.CodeExpiry = e.Expiry
		case *user.HumanEmailVerifiedEvent:
			wm.IsEmailVerified = true
			wm.Code = nil
			if wm.UserState == domain.UserStateInitial {
				wm.UserState = domain.UserStateActive
			}
		case *user.UserRemovedEvent:
			wm.UserState = domain.UserStateDeleted
		}
	}
	return wm.WriteModel.Reduce()
}

func (wm *HumanEmailWriteModel) Query() *eventstore.SearchQueryBuilder {
	return eventstore.NewSearchQueryBuilder(eventstore.ColumnsEvent, user.AggregateType).
		AggregateIDs(wm.AggregateID)
}

func (wm *HumanEmailWriteModel) NewChangedEvent(
	ctx context.Context,
	email string,
) (*user.HumanEmailChangedEvent, bool) {
	hasChanged := false
	changedEvent := user.NewHumanEmailChangedEvent(ctx)
	if wm.Email != email {
		hasChanged = true
		changedEvent.EmailAddress = email
	}
	return changedEvent, hasChanged
}
