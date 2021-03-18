package handler

import (
	"time"

	"github.com/caos/logging"

	"github.com/caos/zitadel/internal/eventstore"
	es_models "github.com/caos/zitadel/internal/eventstore/models"
	"github.com/caos/zitadel/internal/eventstore/query"
	"github.com/caos/zitadel/internal/eventstore/spooler"
	"github.com/caos/zitadel/internal/user/repository/eventsourcing/model"
	usr_model "github.com/caos/zitadel/internal/user/repository/view/model"
)

const (
	machineKeysTable = "auth.machine_keys"
)

type MachineKeys struct {
	handler
	subscription *eventstore.Subscription
}

func newMachineKeys(handler handler) *MachineKeys {
	h := &MachineKeys{
		handler: handler,
	}

	h.subscribe()

	return h
}

func (k *MachineKeys) subscribe() {
	k.subscription = k.es.Subscribe(k.AggregateTypes()...)
	go func() {
		for event := range k.subscription.Events {
			query.ReduceEvent(k, event)
		}
	}()
}

func (k *MachineKeys) ViewModel() string {
	return machineKeysTable
}

func (_ *MachineKeys) AggregateTypes() []es_models.AggregateType {
	return []es_models.AggregateType{model.UserAggregate}
}

func (k *MachineKeys) CurrentSequence() (uint64, error) {
	sequence, err := k.view.GetLatestMachineKeySequence()
	if err != nil {
		return 0, err
	}
	return sequence.CurrentSequence, nil
}

func (k *MachineKeys) EventQuery() (*es_models.SearchQuery, error) {
	sequence, err := k.view.GetLatestMachineKeySequence()
	if err != nil {
		return nil, err
	}
	return es_models.NewSearchQuery().
		AggregateTypeFilter(k.AggregateTypes()...).
		LatestSequenceFilter(sequence.CurrentSequence), nil
}

func (k *MachineKeys) Reduce(event *es_models.Event) (err error) {
	switch event.AggregateType {
	case model.UserAggregate:
		err = k.processMachineKeys(event)
	}
	return err
}

func (k *MachineKeys) processMachineKeys(event *es_models.Event) (err error) {
	key := new(usr_model.MachineKeyView)
	switch event.Type {
	case model.MachineKeyAdded:
		err = key.AppendEvent(event)
		if key.ExpirationDate.Before(time.Now()) {
			return k.view.ProcessedMachineKeySequence(event)
		}
	case model.MachineKeyRemoved:
		err = key.SetData(event)
		if err != nil {
			return err
		}
		return k.view.DeleteMachineKey(key.ID, event)
	case model.UserRemoved:
		return k.view.DeleteMachineKeysByUserID(event.AggregateID, event)
	default:
		return k.view.ProcessedMachineKeySequence(event)
	}
	if err != nil {
		return err
	}
	return k.view.PutMachineKey(key, event)
}

func (k *MachineKeys) OnError(event *es_models.Event, err error) error {
	logging.LogWithFields("SPOOL-S9fe", "id", event.AggregateID).WithError(err).Warn("something went wrong in machine key handler")
	return spooler.HandleError(event, err, k.view.GetLatestMachineKeyFailedEvent, k.view.ProcessedMachineKeyFailedEvent, k.view.ProcessedMachineKeySequence, k.errorCountUntilSkip)
}

func (k *MachineKeys) OnSuccess() error {
	return spooler.HandleSuccess(k.view.UpdateMachineKeySpoolerRunTimestamp)
}