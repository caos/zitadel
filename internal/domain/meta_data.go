package domain

import (
	"time"

	caos_errors "github.com/caos/zitadel/internal/errors"
	es_models "github.com/caos/zitadel/internal/eventstore/v1/models"
)

type MetaData struct {
	es_models.ObjectRoot

	State MetaDataState
	Key   string
	Value string
}

type MetaDataState int32

const (
	MetaDataStateUnspecified MetaDataState = iota
	MetaDataStateActive
	MetaDataStateRemoved
)

func (u *MetaData) IsValid() bool {
	return u.Key != "" && u.Value != ""
}

func (s MetaDataState) Exists() bool {
	return s != MetaDataStateUnspecified && s != MetaDataStateRemoved
}

type MetaDataSearchRequest struct {
	Offset        uint64
	Limit         uint64
	SortingColumn MetaDataSearchKey
	Asc           bool
	Queries       []*MetaDataSearchQuery
}

type MetaDataSearchKey int32

const (
	MetaDataSearchKeyUnspecified MetaDataSearchKey = iota
	MetaDataSearchKeyAggregateID
	MetaDataSearchKeyResourceOwner
	MetaDataSearchKeyKey
	MetaDataSearchKeyValue
)

type MetaDataSearchQuery struct {
	Key    MetaDataSearchKey
	Method SearchMethod
	Value  interface{}
}

type MetaDataSearchResponse struct {
	Offset      uint64
	Limit       uint64
	TotalResult uint64
	Result      []*MetaData
	Sequence    uint64
	Timestamp   time.Time
}

func (r *MetaDataSearchRequest) EnsureLimit(limit uint64) error {
	if r.Limit > limit {
		return caos_errors.ThrowInvalidArgument(nil, "SEARCH-0ds32", "Errors.Limit.ExceedsDefault")
	}
	if r.Limit == 0 {
		r.Limit = limit
	}
	return nil
}

func (r *MetaDataSearchRequest) AppendAggregateIDQuery(aggregateID string) {
	r.Queries = append(r.Queries, &MetaDataSearchQuery{Key: MetaDataSearchKeyAggregateID, Method: SearchMethodEquals, Value: aggregateID})
}

func (r *MetaDataSearchRequest) AppendResourceOwnerQuery(resourceOwner string) {
	r.Queries = append(r.Queries, &MetaDataSearchQuery{Key: MetaDataSearchKeyResourceOwner, Method: SearchMethodEquals, Value: resourceOwner})
}
