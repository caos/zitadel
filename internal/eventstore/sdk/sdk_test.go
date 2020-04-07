package sdk

import (
	"context"
	"testing"

	"github.com/caos/zitadel/internal/errors"
	es_models "github.com/caos/zitadel/internal/eventstore/models"
)

func TestFilter(t *testing.T) {
	type args struct {
		filter   filterFunc
		appender appendFunc
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		{
			name: "filter error",
			args: args{
				filter: func(context.Context, *es_models.SearchQuery) ([]*es_models.Event, error) {
					return nil, errors.ThrowInternal(nil, "test-46VX2", "test error")
				},
				appender: nil,
			},
			wantErr: true,
		},
		{
			name: "no events found",
			args: args{
				filter: func(context.Context, *es_models.SearchQuery) ([]*es_models.Event, error) {
					return []*es_models.Event{}, nil
				},
				appender: nil,
			},
			wantErr: true,
		},
		{
			name: "append fails",
			args: args{
				filter: func(context.Context, *es_models.SearchQuery) ([]*es_models.Event, error) {
					return []*es_models.Event{&es_models.Event{}}, nil
				},
				appender: func(...*es_models.Event) error {
					return errors.ThrowInvalidArgument(nil, "SDK-DhBzl", "test error")
				},
			},
			wantErr: true,
		},
		{
			name: "filter correct",
			args: args{
				filter: func(context.Context, *es_models.SearchQuery) ([]*es_models.Event, error) {
					return []*es_models.Event{&es_models.Event{}}, nil
				},
				appender: func(...*es_models.Event) error {
					return nil
				},
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := Filter(context.Background(), tt.args.filter, tt.args.appender, nil); (err != nil) != tt.wantErr {
				t.Errorf("Filter() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestPush(t *testing.T) {
	type args struct {
		push        pushFunc
		appender    appendFunc
		aggregaters []aggregateFunc
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		{
			name: "no aggregates",
			args: args{
				push:        nil,
				appender:    nil,
				aggregaters: nil,
			},
			wantErr: true,
		},
		{
			name: "aggregater fails",
			args: args{
				push:     nil,
				appender: nil,
				aggregaters: []aggregateFunc{
					func(context.Context) (*es_models.Aggregate, error) {
						return nil, errors.ThrowInternal(nil, "SDK-Ec5x2", "test err")
					},
				},
			},
			wantErr: true,
		},
		{
			name: "push fails",
			args: args{
				push: func(context.Context, ...*es_models.Aggregate) error {
					return errors.ThrowInternal(nil, "SDK-0g4gW", "test error")
				},
				appender: nil,
				aggregaters: []aggregateFunc{
					func(context.Context) (*es_models.Aggregate, error) {
						return &es_models.Aggregate{}, nil
					},
				},
			},
			wantErr: true,
		},
		{
			name: "append aggregates fails",
			args: args{
				push: func(context.Context, ...*es_models.Aggregate) error {
					return nil
				},
				appender: func(...*es_models.Event) error {
					return errors.ThrowInvalidArgument(nil, "SDK-BDhcT", "test err")
				},
				aggregaters: []aggregateFunc{
					func(context.Context) (*es_models.Aggregate, error) {
						return &es_models.Aggregate{Events: []*es_models.Event{&es_models.Event{}}}, nil
					},
				},
			},
			wantErr: true,
		},
		{
			name: "correct one aggregate",
			args: args{
				push: func(context.Context, ...*es_models.Aggregate) error {
					return nil
				},
				appender: func(...*es_models.Event) error {
					return nil
				},
				aggregaters: []aggregateFunc{
					func(context.Context) (*es_models.Aggregate, error) {
						return &es_models.Aggregate{Events: []*es_models.Event{&es_models.Event{}}}, nil
					},
				},
			},
			wantErr: false,
		},
		{
			name: "correct multiple aggregate",
			args: args{
				push: func(context.Context, ...*es_models.Aggregate) error {
					return nil
				},
				appender: func(...*es_models.Event) error {
					return nil
				},
				aggregaters: []aggregateFunc{
					func(context.Context) (*es_models.Aggregate, error) {
						return &es_models.Aggregate{Events: []*es_models.Event{&es_models.Event{}}}, nil
					},
					func(context.Context) (*es_models.Aggregate, error) {
						return &es_models.Aggregate{Events: []*es_models.Event{&es_models.Event{}}}, nil
					},
				},
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := Push(context.Background(), tt.args.push, tt.args.appender, tt.args.aggregaters...); (err != nil) != tt.wantErr {
				t.Errorf("Push() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
