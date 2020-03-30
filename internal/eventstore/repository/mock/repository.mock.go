// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/caos/zitadel/internal/eventstore/repository (interfaces: Repository)

// Package api is a generated GoMock package.
package api

import (
	context "context"
	models "github.com/caos/zitadel/internal/eventstore/models"
	gomock "github.com/golang/mock/gomock"
	reflect "reflect"
)

// MockRepository is a mock of Repository interface
type MockRepository struct {
	ctrl     *gomock.Controller
	recorder *MockRepositoryMockRecorder
}

// MockRepositoryMockRecorder is the mock recorder for MockRepository
type MockRepositoryMockRecorder struct {
	mock *MockRepository
}

// NewMockRepository creates a new mock instance
func NewMockRepository(ctrl *gomock.Controller) *MockRepository {
	mock := &MockRepository{ctrl: ctrl}
	mock.recorder = &MockRepositoryMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockRepository) EXPECT() *MockRepositoryMockRecorder {
	return m.recorder
}

// Filter mocks base method
func (m *MockRepository) Filter(arg0 context.Context, arg1 *models.SearchQuery) ([]*models.Event, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Filter", arg0, arg1)
	ret0, _ := ret[0].([]*models.Event)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Filter indicates an expected call of Filter
func (mr *MockRepositoryMockRecorder) Filter(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Filter", reflect.TypeOf((*MockRepository)(nil).Filter), arg0, arg1)
}

// Health mocks base method
func (m *MockRepository) Health(arg0 context.Context) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Health", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// Health indicates an expected call of Health
func (mr *MockRepositoryMockRecorder) Health(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Health", reflect.TypeOf((*MockRepository)(nil).Health), arg0)
}

// PushEvents mocks base method
func (m *MockRepository) PushEvents(arg0 context.Context, arg1 ...*models.Aggregate) error {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0}
	for _, a := range arg1 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "PushEvents", varargs...)
	ret0, _ := ret[0].(error)
	return ret0
}

// PushEvents indicates an expected call of PushEvents
func (mr *MockRepositoryMockRecorder) PushEvents(arg0 interface{}, arg1 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0}, arg1...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PushEvents", reflect.TypeOf((*MockRepository)(nil).PushEvents), varargs...)
}
