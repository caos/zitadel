package models

import "github.com/caos/zitadel/internal/errors"

type SearchQuery struct {
	Limit   uint64
	Desc    bool
	Filters []*Filter
}

func NewSearchQuery() *SearchQuery {
	return &SearchQuery{
		Filters: make([]*Filter, 0, 4),
	}
}

func (q *SearchQuery) SetLimit(limit uint64) *SearchQuery {
	if limit < 0 {
		return q
	}
	q.Limit = limit
	return q
}

func (q *SearchQuery) OrderDesc() *SearchQuery {
	q.Desc = true
	return q
}

func (q *SearchQuery) OrderAsc() *SearchQuery {
	q.Desc = false
	return q
}

func (q *SearchQuery) AggregateIDFilter(id string) *SearchQuery {
	return q.setFilter(NewFilter(Field_AggregateID, id, Operation_Equals))
}

func (q *SearchQuery) AggregateTypeFilter(types ...string) *SearchQuery {
	return q.setFilter(NewFilter(Field_AggregateType, types, Operation_In))
}

func (q *SearchQuery) LatestSequenceFilter(sequence uint64) *SearchQuery {
	sortOrder := Operation_Greater
	if q.Desc {
		sortOrder = Operation_Less
	}
	return q.setFilter(NewFilter(Field_LatestSequence, sequence, sortOrder))
}

func (q *SearchQuery) ResourceOwnerFilter(resourceOwner string) *SearchQuery {
	q.setFilter(NewFilter(Field_ResourceOwner, resourceOwner, Operation_Equals))
	return q
}

func (q *SearchQuery) setFilter(filter *Filter) *SearchQuery {
	for _, f := range q.Filters {
		if f.field == filter.field {
			f = filter
			return q
		}
	}
	q.Filters = append(q.Filters, filter)
	return q
}

func (q *SearchQuery) Validate() error {
	if q == nil {
		return errors.ThrowPreconditionFailed(nil, "MODEL-J5xQi", "search query is nil")
	}
	for _, filter := range q.Filters {
		if err := filter.Validate(); err != nil {
			return err
		}
	}

	return nil
}
