package command

import (
	"context"
	"reflect"

	"github.com/caos/zitadel/internal/eventstore"

	"github.com/caos/zitadel/internal/crypto"
	"github.com/caos/zitadel/internal/domain"
	"github.com/caos/zitadel/internal/repository/iam"
	"github.com/caos/zitadel/internal/repository/idpconfig"
)

type IAMIDPOIDCConfigWriteModel struct {
	OIDCConfigWriteModel
}

func NewIAMIDPOIDCConfigWriteModel(idpConfigID string) *IAMIDPOIDCConfigWriteModel {
	return &IAMIDPOIDCConfigWriteModel{
		OIDCConfigWriteModel{
			WriteModel: eventstore.WriteModel{
				AggregateID:   domain.IAMID,
				ResourceOwner: domain.IAMID,
			},
			IDPConfigID: idpConfigID,
		},
	}
}

func (wm *IAMIDPOIDCConfigWriteModel) AppendEvents(events ...eventstore.EventReader) {
	for _, event := range events {
		switch e := event.(type) {
		case *iam.IDPOIDCConfigAddedEvent:
			if wm.IDPConfigID != e.IDPConfigID {
				continue
			}
			wm.OIDCConfigWriteModel.AppendEvents(&e.OIDCConfigAddedEvent)
		case *iam.IDPOIDCConfigChangedEvent:
			if wm.IDPConfigID != e.IDPConfigID {
				continue
			}
			wm.OIDCConfigWriteModel.AppendEvents(&e.OIDCConfigChangedEvent)
		case *iam.IDPConfigReactivatedEvent:
			if wm.IDPConfigID != e.ConfigID {
				continue
			}
			wm.OIDCConfigWriteModel.AppendEvents(&e.IDPConfigReactivatedEvent)
		case *iam.IDPConfigDeactivatedEvent:
			if wm.IDPConfigID != e.ConfigID {
				continue
			}
			wm.OIDCConfigWriteModel.AppendEvents(&e.IDPConfigDeactivatedEvent)
		case *iam.IDPConfigRemovedEvent:
			if wm.IDPConfigID != e.ConfigID {
				continue
			}
			wm.OIDCConfigWriteModel.AppendEvents(&e.IDPConfigRemovedEvent)
		}
	}
}

func (wm *IAMIDPOIDCConfigWriteModel) Reduce() error {
	return wm.OIDCConfigWriteModel.Reduce()
}

func (wm *IAMIDPOIDCConfigWriteModel) Query() *eventstore.SearchQueryBuilder {
	return eventstore.NewSearchQueryBuilder(eventstore.ColumnsEvent).
		ResourceOwner(wm.ResourceOwner).
		AddQuery().
		AggregateTypes(iam.AggregateType).
		AggregateIDs(wm.AggregateID).
		EventTypes(
			iam.IDPOIDCConfigAddedEventType,
			iam.IDPOIDCConfigChangedEventType,
			iam.IDPConfigReactivatedEventType,
			iam.IDPConfigDeactivatedEventType,
			iam.IDPConfigRemovedEventType).
		Builder()
}

func (wm *IAMIDPOIDCConfigWriteModel) NewChangedEvent(
	ctx context.Context,
	aggregate *eventstore.Aggregate,
	idpConfigID,
	clientID,
	issuer,
	authorizationEndpoint,
	tokenEndpoint,
	clientSecretString string,
	secretCrypto crypto.Crypto,
	idpDisplayNameMapping,
	userNameMapping domain.OIDCMappingField,
	scopes ...string,
) (*iam.IDPOIDCConfigChangedEvent, bool, error) {

	changes := make([]idpconfig.OIDCConfigChanges, 0)
	var clientSecret *crypto.CryptoValue
	var err error
	if clientSecretString != "" {
		clientSecret, err = crypto.Crypt([]byte(clientSecretString), secretCrypto)
		if err != nil {
			return nil, false, err
		}
		changes = append(changes, idpconfig.ChangeClientSecret(clientSecret))
	}
	if wm.ClientID != clientID {
		changes = append(changes, idpconfig.ChangeClientID(clientID))
	}
	if wm.Issuer != issuer {
		changes = append(changes, idpconfig.ChangeIssuer(issuer))
	}
	if wm.AuthorizationEndpoint != authorizationEndpoint {
		changes = append(changes, idpconfig.ChangeAuthorizationEndpoint(authorizationEndpoint))
	}
	if wm.TokenEndpoint != tokenEndpoint {
		changes = append(changes, idpconfig.ChangeTokenEndpoint(tokenEndpoint))
	}
	if idpDisplayNameMapping.Valid() && wm.IDPDisplayNameMapping != idpDisplayNameMapping {
		changes = append(changes, idpconfig.ChangeIDPDisplayNameMapping(idpDisplayNameMapping))
	}
	if userNameMapping.Valid() && wm.UserNameMapping != userNameMapping {
		changes = append(changes, idpconfig.ChangeUserNameMapping(userNameMapping))
	}
	if !reflect.DeepEqual(wm.Scopes, scopes) {
		changes = append(changes, idpconfig.ChangeScopes(scopes))
	}
	if len(changes) == 0 {
		return nil, false, nil
	}
	changeEvent, err := iam.NewIDPOIDCConfigChangedEvent(ctx, aggregate, idpConfigID, changes)
	if err != nil {
		return nil, false, err
	}
	return changeEvent, true, nil
}
