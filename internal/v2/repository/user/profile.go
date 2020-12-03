package user

import (
	"context"
	"encoding/json"
	"github.com/caos/zitadel/internal/errors"
	"github.com/caos/zitadel/internal/eventstore/v2"
	"github.com/caos/zitadel/internal/eventstore/v2/repository"
	"golang.org/x/text/language"
)

const (
	profileEventPrefix      = humanEventPrefix + "profile."
	HumanProfileChangedType = profileEventPrefix + "changed"
)

type HumanProfileChangedEvent struct {
	eventstore.BaseEvent `json:"-"`

	FirstName         string       `json:"firstName,omitempty"`
	LastName          string       `json:"lastName,omitempty"`
	NickName          string       `json:"nickName,omitempty"`
	DisplayName       string       `json:"displayName,omitempty"`
	PreferredLanguage language.Tag `json:"preferredLanguage,omitempty"`
	Gender            Gender       `json:"gender,omitempty"`
}

func (e *HumanProfileChangedEvent) CheckPrevious() bool {
	return true
}

func (e *HumanProfileChangedEvent) Data() interface{} {
	return e
}

func NewHumanProfileChangedEvent(
	ctx context.Context,
	firstName,
	lastName,
	nickName,
	displayName string,
	preferredLanguage language.Tag,
	gender Gender) *HumanProfileChangedEvent {
	return &HumanProfileChangedEvent{
		BaseEvent: *eventstore.NewBaseEventForPush(
			ctx,
			HumanProfileChangedType,
		),
		FirstName:         firstName,
		LastName:          lastName,
		NickName:          nickName,
		DisplayName:       displayName,
		PreferredLanguage: preferredLanguage,
		Gender:            gender,
	}
}

func HumanProfileChangedEventMapper(event *repository.Event) (eventstore.EventReader, error) {
	profileChanged := &HumanProfileChangedEvent{
		BaseEvent: *eventstore.BaseEventFromRepo(event),
	}
	err := json.Unmarshal(event.Data, profileChanged)
	if err != nil {
		return nil, errors.ThrowInternal(err, "USER-5M0pd", "unable to unmarshal human profile changed")
	}

	return profileChanged, nil
}
