package query

import (
	"github.com/caos/zitadel/internal/domain"
	"github.com/caos/zitadel/internal/eventstore"
	"github.com/caos/zitadel/internal/repository/idpconfig"
)

type IDPConfigReadModel struct {
	eventstore.ReadModel

	State        domain.IDPConfigState
	ConfigID     string
	Name         string
	StylingType  domain.IDPConfigStylingType
	ProviderType domain.IdentityProviderType

	OIDCConfig          *IDPOIDCConfigReadModel
	AuthConnectorConfig *IDPAuthConnectorConfigReadModel
}

func NewIDPConfigReadModel(configID string) *IDPConfigReadModel {
	return &IDPConfigReadModel{
		ConfigID: configID,
	}
}

func (rm *IDPConfigReadModel) AppendEvents(events ...eventstore.EventReader) {
	for _, event := range events {
		switch e := event.(type) {
		case *idpconfig.IDPConfigAddedEvent:
			rm.ReadModel.AppendEvents(e)
		case *idpconfig.IDPConfigChangedEvent:
			rm.ReadModel.AppendEvents(e)
		case *idpconfig.IDPConfigDeactivatedEvent:
			rm.ReadModel.AppendEvents(e)
		case *idpconfig.IDPConfigReactivatedEvent:
			rm.ReadModel.AppendEvents(e)
		case *idpconfig.IDPConfigRemovedEvent:
			rm.ReadModel.AppendEvents(e)
		case *idpconfig.OIDCConfigAddedEvent:
			rm.OIDCConfig = &IDPOIDCConfigReadModel{}
			rm.ReadModel.AppendEvents(e)
			rm.OIDCConfig.AppendEvents(event)
		case *idpconfig.OIDCConfigChangedEvent:
			rm.ReadModel.AppendEvents(e)
			rm.OIDCConfig.AppendEvents(event)
		case *idpconfig.AuthConnectorConfigAddedEvent:
			rm.AuthConnectorConfig = &IDPAuthConnectorConfigReadModel{}
			rm.ReadModel.AppendEvents(e)
			rm.AuthConnectorConfig.AppendEvents(event)
		case *idpconfig.AuthConnectorConfigChangedEvent:
			rm.ReadModel.AppendEvents(e)
			rm.AuthConnectorConfig.AppendEvents(event)
		}
	}
}

func (rm *IDPConfigReadModel) Reduce() error {
	for _, event := range rm.Events {
		switch e := event.(type) {
		case *idpconfig.IDPConfigAddedEvent:
			rm.reduceConfigAddedEvent(e)
		case *idpconfig.IDPConfigChangedEvent:
			rm.reduceConfigChangedEvent(e)
		case *idpconfig.IDPConfigDeactivatedEvent:
			rm.reduceConfigStateChanged(e.ConfigID, domain.IDPConfigStateInactive)
		case *idpconfig.IDPConfigReactivatedEvent:
			rm.reduceConfigStateChanged(e.ConfigID, domain.IDPConfigStateActive)
		case *idpconfig.IDPConfigRemovedEvent:
			rm.reduceConfigStateChanged(e.ConfigID, domain.IDPConfigStateRemoved)
		}
	}

	if rm.OIDCConfig != nil {
		if err := rm.OIDCConfig.Reduce(); err != nil {
			return err
		}
	}
	if rm.AuthConnectorConfig != nil {
		if err := rm.AuthConnectorConfig.Reduce(); err != nil {
			return err
		}
	}
	return rm.ReadModel.Reduce()
}

func (rm *IDPConfigReadModel) reduceConfigAddedEvent(e *idpconfig.IDPConfigAddedEvent) {
	rm.ConfigID = e.ConfigID
	rm.Name = e.Name
	rm.StylingType = e.StylingType
	rm.State = domain.IDPConfigStateActive
}

func (rm *IDPConfigReadModel) reduceConfigChangedEvent(e *idpconfig.IDPConfigChangedEvent) {
	if e.Name != nil {
		rm.Name = *e.Name
	}
	if e.StylingType != nil && e.StylingType.Valid() {
		rm.StylingType = *e.StylingType
	}
}

func (rm *IDPConfigReadModel) reduceConfigStateChanged(configID string, state domain.IDPConfigState) {
	rm.State = state
}
