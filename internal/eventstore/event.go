package eventstore

import (
	"time"
)

type EventPusher interface {
	//Aggregate is the metadata of an aggregate
	Aggregate() Aggregate
	// EditorService is the service who wants to push the event
	EditorService() string
	//EditorUser is the user who wants to push the event
	EditorUser() string
	//KeyType must return an event type which should be unique in the aggregate
	Type() EventType
	//Data returns the payload of the event. It represent the changed fields by the event
	// valid types are:
	// * nil (no payload),
	// * json byte array
	// * struct which can be marshalled to json
	// * pointer to struct which can be marshalled to json
	Data() interface{}
	//UniqueConstraints should be added for unique attributes of an event, if nil constraints will not be checked
	UniqueConstraints() []*EventUniqueConstraint
}

type EventReader interface {
	// EditorService is the service who pushed the event
	EditorService() string
	//EditorUser is the user who pushed the event
	EditorUser() string
	//KeyType is the type of the event
	Type() EventType

	Aggregate() Aggregate

	Sequence() uint64
	CreationDate() time.Time
	//PreviousAggregateSequence returns the previous sequence of the aggregate root (e.g. for org.42508134)
	PreviousAggregateSequence() uint64
	//PreviousAggregateTypeSequence returns the previous sequence of the aggregate type (e.g. for org)
	PreviousAggregateTypeSequence() uint64
	//DataAsBytes returns the payload of the event. It represent the changed fields by the event
	DataAsBytes() []byte
}
