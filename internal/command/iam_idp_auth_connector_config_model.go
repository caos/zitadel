package command

import (
	"context"

	"github.com/caos/zitadel/internal/domain"
	"github.com/caos/zitadel/internal/eventstore"
	"github.com/caos/zitadel/internal/repository/iam"
	"github.com/caos/zitadel/internal/repository/idpconfig"
)

type IAMIDPAuthConnectorConfigWriteModel struct {
	AuthConnectorConfigWriteModel
}

func NewIAMIDPAuthConnectorConfigWriteModel(idpConfigID string) *IAMIDPAuthConnectorConfigWriteModel {
	return &IAMIDPAuthConnectorConfigWriteModel{
		AuthConnectorConfigWriteModel{
			WriteModel: eventstore.WriteModel{
				AggregateID:   domain.IAMID,
				ResourceOwner: domain.IAMID,
			},
			IDPConfigID: idpConfigID,
		},
	}
}

func (wm *IAMIDPAuthConnectorConfigWriteModel) AppendEvents(events ...eventstore.EventReader) {
	for _, event := range events {
		switch e := event.(type) {
		case *iam.IDPAuthConnectorConfigAddedEvent:
			if wm.IDPConfigID != e.IDPConfigID {
				continue
			}
			wm.AuthConnectorConfigWriteModel.AppendEvents(&e.AuthConnectorConfigAddedEvent)
		case *iam.IDPAuthConnectorConfigChangedEvent:
			if wm.IDPConfigID != e.IDPConfigID {
				continue
			}
			wm.AuthConnectorConfigWriteModel.AppendEvents(&e.AuthConnectorConfigChangedEvent)
		case *iam.IDPConfigReactivatedEvent:
			if wm.IDPConfigID != e.ConfigID {
				continue
			}
			wm.AuthConnectorConfigWriteModel.AppendEvents(&e.IDPConfigReactivatedEvent)
		case *iam.IDPConfigDeactivatedEvent:
			if wm.IDPConfigID != e.ConfigID {
				continue
			}
			wm.AuthConnectorConfigWriteModel.AppendEvents(&e.IDPConfigDeactivatedEvent)
		case *iam.IDPConfigRemovedEvent:
			if wm.IDPConfigID != e.ConfigID {
				continue
			}
			wm.AuthConnectorConfigWriteModel.AppendEvents(&e.IDPConfigRemovedEvent)
		}
	}
}

func (wm *IAMIDPAuthConnectorConfigWriteModel) Reduce() error {
	return wm.AuthConnectorConfigWriteModel.Reduce()
}

func (wm *IAMIDPAuthConnectorConfigWriteModel) Query() *eventstore.SearchQueryBuilder {
	return eventstore.NewSearchQueryBuilder(eventstore.ColumnsEvent).
		ResourceOwner(wm.ResourceOwner).
		AddQuery().
		AggregateIDs(wm.AggregateID).
		AggregateTypes(iam.AggregateType).
		EventTypes(
			iam.IDPAuthConnectorConfigAddedEventType,
			iam.IDPAuthConnectorConfigChangedEventType,
			iam.IDPAuthConnectorMachineUserRemovedEventType,
			iam.IDPConfigReactivatedEventType,
			iam.IDPConfigDeactivatedEventType,
			iam.IDPConfigRemovedEventType).
		Builder()
}

func (wm *IAMIDPAuthConnectorConfigWriteModel) NewChangedEvent(
	ctx context.Context,
	aggregate *eventstore.Aggregate,
	idpConfigID,
	baseURL,
	providerID,
	machineID string,
) (*iam.IDPAuthConnectorConfigChangedEvent, bool, error) {

	changes := make([]idpconfig.AuthConnectorConfigChanges, 0)

	if wm.BaseURL != baseURL {
		changes = append(changes, idpconfig.ChangeBaseURL(baseURL))
	}
	if wm.ProviderID != providerID {
		changes = append(changes, idpconfig.ChangeProviderID(providerID))
	}
	if wm.MachineID != machineID {
		changes = append(changes, idpconfig.ChangeMachineID(machineID))
	}
	if len(changes) == 0 {
		return nil, false, nil
	}
	changeEvent, err := iam.NewIDPAuthConnectorConfigChangedEvent(ctx, aggregate, idpConfigID, changes)
	if err != nil {
		return nil, false, err
	}
	return changeEvent, true, nil
}
