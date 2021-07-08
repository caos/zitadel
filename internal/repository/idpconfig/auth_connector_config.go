package idpconfig

import (
	"encoding/json"

	"github.com/caos/zitadel/internal/eventstore"

	"github.com/caos/zitadel/internal/errors"
	"github.com/caos/zitadel/internal/eventstore/repository"
)

const (
	AuthConnectorConfigAddedEventType        eventstore.EventType = "auth_connector.config.added"
	AuthConnectorConfigChangedEventType      eventstore.EventType = "auth_connector.config.changed"
	AuthConnectorMachineUserRemovedEventType eventstore.EventType = "auth_connector.machine.removed"
)

type AuthConnectorConfigAddedEvent struct {
	eventstore.BaseEvent `json:"-"`

	IDPConfigID string `json:"idpConfigId"`
	BaseURL     string `json:"baseUrl,omitempty"`
	ProviderID  string `json:"providerId,omitempty"`
	MachineID   string `json:"machineId,omitempty"`
}

func (e *AuthConnectorConfigAddedEvent) Data() interface{} {
	return e
}

func (e *AuthConnectorConfigAddedEvent) UniqueConstraints() []*eventstore.EventUniqueConstraint {
	return nil
}

func NewAuthConnectorConfigAddedEvent(
	base *eventstore.BaseEvent,
	idpConfigID,
	baseURL,
	providerID,
	machineID string,
) *AuthConnectorConfigAddedEvent {

	return &AuthConnectorConfigAddedEvent{
		BaseEvent:   *base,
		IDPConfigID: idpConfigID,
		BaseURL:     baseURL,
		ProviderID:  providerID,
		MachineID:   machineID,
	}
}

func AuthConnectorConfigAddedEventMapper(event *repository.Event) (eventstore.EventReader, error) {
	e := &AuthConnectorConfigAddedEvent{
		BaseEvent: *eventstore.BaseEventFromRepo(event),
	}

	err := json.Unmarshal(event.Data, e)
	if err != nil {
		return nil, errors.ThrowInternal(err, "IDPCONF-DAgh2", "unable to unmarshal event")
	}

	return e, nil
}

type AuthConnectorConfigChangedEvent struct {
	eventstore.BaseEvent `json:"-"`

	IDPConfigID string `json:"idpConfigId"`

	BaseURL    *string `json:"baseUrl,omitempty"`
	ProviderID *string `json:"providerId,omitempty"`
	MachineID  *string `json:"machineId,omitempty"`
}

func (e *AuthConnectorConfigChangedEvent) Data() interface{} {
	return e
}

func (e *AuthConnectorConfigChangedEvent) UniqueConstraints() []*eventstore.EventUniqueConstraint {
	return nil
}

func NewAuthConnectorConfigChangedEvent(
	base *eventstore.BaseEvent,
	idpConfigID string,
	changes []AuthConnectorConfigChanges,
) (*AuthConnectorConfigChangedEvent, error) {
	if len(changes) == 0 {
		return nil, errors.ThrowPreconditionFailed(nil, "IDPCONF-Egfgs", "Errors.NoChangesFound")
	}
	changeEvent := &AuthConnectorConfigChangedEvent{
		BaseEvent:   *base,
		IDPConfigID: idpConfigID,
	}
	for _, change := range changes {
		change(changeEvent)
	}
	return changeEvent, nil
}

type AuthConnectorConfigChanges func(*AuthConnectorConfigChangedEvent)

func ChangeBaseURL(baseURL string) func(*AuthConnectorConfigChangedEvent) {
	return func(e *AuthConnectorConfigChangedEvent) {
		e.BaseURL = &baseURL
	}
}

func ChangeProviderID(providerID string) func(*AuthConnectorConfigChangedEvent) {
	return func(e *AuthConnectorConfigChangedEvent) {
		e.ProviderID = &providerID
	}
}

func ChangeMachineID(machineID string) func(*AuthConnectorConfigChangedEvent) {
	return func(e *AuthConnectorConfigChangedEvent) {
		e.MachineID = &machineID
	}
}

func AuthConnectorConfigChangedEventMapper(event *repository.Event) (eventstore.EventReader, error) {
	e := &AuthConnectorConfigChangedEvent{
		BaseEvent: *eventstore.BaseEventFromRepo(event),
	}

	err := json.Unmarshal(event.Data, e)
	if err != nil {
		return nil, errors.ThrowInternal(err, "IDPCONF-GHn2s", "unable to unmarshal event")
	}

	return e, nil
}

type AuthConnectorMachineUserRemovedEvent struct {
	eventstore.BaseEvent `json:"-"`

	IDPConfigID string `json:"idpConfigId"`
}

func (e *AuthConnectorMachineUserRemovedEvent) Data() interface{} {
	return e
}

func (e *AuthConnectorMachineUserRemovedEvent) UniqueConstraints() []*eventstore.EventUniqueConstraint {
	return nil
}

func NewAuthConnectorMachineUserRemovedEvent(
	base *eventstore.BaseEvent,
	idpConfigID string,
) *AuthConnectorMachineUserRemovedEvent {
	return &AuthConnectorMachineUserRemovedEvent{
		BaseEvent:   *base,
		IDPConfigID: idpConfigID,
	}
}

func AuthConnectorMachineUserRemovedEventMapper(event *repository.Event) (eventstore.EventReader, error) {
	e := &AuthConnectorMachineUserRemovedEvent{
		BaseEvent: *eventstore.BaseEventFromRepo(event),
	}

	err := json.Unmarshal(event.Data, e)
	if err != nil {
		return nil, errors.ThrowInternal(err, "IDPCONF-FDsgd", "unable to unmarshal event")
	}

	return e, nil
}
