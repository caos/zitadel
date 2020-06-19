// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/caos/zitadel/pkg/auth/api/grpc (interfaces: AuthServiceClient)

// Package api is a generated GoMock package.
package api

import (
	context "context"
	grpc "github.com/caos/zitadel/pkg/auth/api/grpc"
	gomock "github.com/golang/mock/gomock"
	grpc0 "google.golang.org/grpc"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	structpb "google.golang.org/protobuf/types/known/structpb"
	reflect "reflect"
)

// MockAuthServiceClient is a mock of AuthServiceClient interface
type MockAuthServiceClient struct {
	ctrl     *gomock.Controller
	recorder *MockAuthServiceClientMockRecorder
}

// MockAuthServiceClientMockRecorder is the mock recorder for MockAuthServiceClient
type MockAuthServiceClientMockRecorder struct {
	mock *MockAuthServiceClient
}

// NewMockAuthServiceClient creates a new mock instance
func NewMockAuthServiceClient(ctrl *gomock.Controller) *MockAuthServiceClient {
	mock := &MockAuthServiceClient{ctrl: ctrl}
	mock.recorder = &MockAuthServiceClientMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockAuthServiceClient) EXPECT() *MockAuthServiceClientMockRecorder {
	return m.recorder
}

// AddMfaOTP mocks base method
func (m *MockAuthServiceClient) AddMfaOTP(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.MfaOtpResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "AddMfaOTP", varargs...)
	ret0, _ := ret[0].(*grpc.MfaOtpResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AddMfaOTP indicates an expected call of AddMfaOTP
func (mr *MockAuthServiceClientMockRecorder) AddMfaOTP(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddMfaOTP", reflect.TypeOf((*MockAuthServiceClient)(nil).AddMfaOTP), varargs...)
}

// ChangeMyPassword mocks base method
func (m *MockAuthServiceClient) ChangeMyPassword(arg0 context.Context, arg1 *grpc.PasswordChange, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ChangeMyPassword", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ChangeMyPassword indicates an expected call of ChangeMyPassword
func (mr *MockAuthServiceClientMockRecorder) ChangeMyPassword(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ChangeMyPassword", reflect.TypeOf((*MockAuthServiceClient)(nil).ChangeMyPassword), varargs...)
}

// ChangeMyUserEmail mocks base method
func (m *MockAuthServiceClient) ChangeMyUserEmail(arg0 context.Context, arg1 *grpc.UpdateUserEmailRequest, arg2 ...grpc0.CallOption) (*grpc.UserEmail, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ChangeMyUserEmail", varargs...)
	ret0, _ := ret[0].(*grpc.UserEmail)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ChangeMyUserEmail indicates an expected call of ChangeMyUserEmail
func (mr *MockAuthServiceClientMockRecorder) ChangeMyUserEmail(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ChangeMyUserEmail", reflect.TypeOf((*MockAuthServiceClient)(nil).ChangeMyUserEmail), varargs...)
}

// ChangeMyUserPhone mocks base method
func (m *MockAuthServiceClient) ChangeMyUserPhone(arg0 context.Context, arg1 *grpc.UpdateUserPhoneRequest, arg2 ...grpc0.CallOption) (*grpc.UserPhone, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ChangeMyUserPhone", varargs...)
	ret0, _ := ret[0].(*grpc.UserPhone)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ChangeMyUserPhone indicates an expected call of ChangeMyUserPhone
func (mr *MockAuthServiceClientMockRecorder) ChangeMyUserPhone(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ChangeMyUserPhone", reflect.TypeOf((*MockAuthServiceClient)(nil).ChangeMyUserPhone), varargs...)
}

// GetMyMfas mocks base method
func (m *MockAuthServiceClient) GetMyMfas(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.MultiFactors, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyMfas", varargs...)
	ret0, _ := ret[0].(*grpc.MultiFactors)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyMfas indicates an expected call of GetMyMfas
func (mr *MockAuthServiceClientMockRecorder) GetMyMfas(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyMfas", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyMfas), varargs...)
}

// GetMyUser mocks base method
func (m *MockAuthServiceClient) GetMyUser(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.UserView, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyUser", varargs...)
	ret0, _ := ret[0].(*grpc.UserView)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyUser indicates an expected call of GetMyUser
func (mr *MockAuthServiceClientMockRecorder) GetMyUser(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyUser", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyUser), varargs...)
}

// GetMyUserAddress mocks base method
func (m *MockAuthServiceClient) GetMyUserAddress(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.UserAddressView, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyUserAddress", varargs...)
	ret0, _ := ret[0].(*grpc.UserAddressView)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyUserAddress indicates an expected call of GetMyUserAddress
func (mr *MockAuthServiceClientMockRecorder) GetMyUserAddress(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyUserAddress", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyUserAddress), varargs...)
}

// GetMyUserEmail mocks base method
func (m *MockAuthServiceClient) GetMyUserEmail(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.UserEmailView, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyUserEmail", varargs...)
	ret0, _ := ret[0].(*grpc.UserEmailView)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyUserEmail indicates an expected call of GetMyUserEmail
func (mr *MockAuthServiceClientMockRecorder) GetMyUserEmail(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyUserEmail", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyUserEmail), varargs...)
}

// GetMyUserPhone mocks base method
func (m *MockAuthServiceClient) GetMyUserPhone(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.UserPhoneView, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyUserPhone", varargs...)
	ret0, _ := ret[0].(*grpc.UserPhoneView)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyUserPhone indicates an expected call of GetMyUserPhone
func (mr *MockAuthServiceClientMockRecorder) GetMyUserPhone(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyUserPhone", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyUserPhone), varargs...)
}

// GetMyUserProfile mocks base method
func (m *MockAuthServiceClient) GetMyUserProfile(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.UserProfileView, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyUserProfile", varargs...)
	ret0, _ := ret[0].(*grpc.UserProfileView)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyUserProfile indicates an expected call of GetMyUserProfile
func (mr *MockAuthServiceClientMockRecorder) GetMyUserProfile(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyUserProfile", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyUserProfile), varargs...)
}

// GetMyUserSessions mocks base method
func (m *MockAuthServiceClient) GetMyUserSessions(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.UserSessionViews, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyUserSessions", varargs...)
	ret0, _ := ret[0].(*grpc.UserSessionViews)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyUserSessions indicates an expected call of GetMyUserSessions
func (mr *MockAuthServiceClientMockRecorder) GetMyUserSessions(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyUserSessions", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyUserSessions), varargs...)
}

// GetMyZitadelPermissions mocks base method
func (m *MockAuthServiceClient) GetMyZitadelPermissions(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*grpc.MyPermissions, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "GetMyZitadelPermissions", varargs...)
	ret0, _ := ret[0].(*grpc.MyPermissions)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetMyZitadelPermissions indicates an expected call of GetMyZitadelPermissions
func (mr *MockAuthServiceClientMockRecorder) GetMyZitadelPermissions(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetMyZitadelPermissions", reflect.TypeOf((*MockAuthServiceClient)(nil).GetMyZitadelPermissions), varargs...)
}

// Healthz mocks base method
func (m *MockAuthServiceClient) Healthz(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "Healthz", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Healthz indicates an expected call of Healthz
func (mr *MockAuthServiceClientMockRecorder) Healthz(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Healthz", reflect.TypeOf((*MockAuthServiceClient)(nil).Healthz), varargs...)
}

// Ready mocks base method
func (m *MockAuthServiceClient) Ready(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "Ready", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Ready indicates an expected call of Ready
func (mr *MockAuthServiceClientMockRecorder) Ready(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Ready", reflect.TypeOf((*MockAuthServiceClient)(nil).Ready), varargs...)
}

// RemoveMfaOTP mocks base method
func (m *MockAuthServiceClient) RemoveMfaOTP(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "RemoveMfaOTP", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// RemoveMfaOTP indicates an expected call of RemoveMfaOTP
func (mr *MockAuthServiceClientMockRecorder) RemoveMfaOTP(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "RemoveMfaOTP", reflect.TypeOf((*MockAuthServiceClient)(nil).RemoveMfaOTP), varargs...)
}

// ResendMyEmailVerificationMail mocks base method
func (m *MockAuthServiceClient) ResendMyEmailVerificationMail(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ResendMyEmailVerificationMail", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ResendMyEmailVerificationMail indicates an expected call of ResendMyEmailVerificationMail
func (mr *MockAuthServiceClientMockRecorder) ResendMyEmailVerificationMail(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ResendMyEmailVerificationMail", reflect.TypeOf((*MockAuthServiceClient)(nil).ResendMyEmailVerificationMail), varargs...)
}

// ResendMyPhoneVerificationCode mocks base method
func (m *MockAuthServiceClient) ResendMyPhoneVerificationCode(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "ResendMyPhoneVerificationCode", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ResendMyPhoneVerificationCode indicates an expected call of ResendMyPhoneVerificationCode
func (mr *MockAuthServiceClientMockRecorder) ResendMyPhoneVerificationCode(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ResendMyPhoneVerificationCode", reflect.TypeOf((*MockAuthServiceClient)(nil).ResendMyPhoneVerificationCode), varargs...)
}

// SearchMyProjectOrgs mocks base method
func (m *MockAuthServiceClient) SearchMyProjectOrgs(arg0 context.Context, arg1 *grpc.MyProjectOrgSearchRequest, arg2 ...grpc0.CallOption) (*grpc.MyProjectOrgSearchResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SearchMyProjectOrgs", varargs...)
	ret0, _ := ret[0].(*grpc.MyProjectOrgSearchResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SearchMyProjectOrgs indicates an expected call of SearchMyProjectOrgs
func (mr *MockAuthServiceClientMockRecorder) SearchMyProjectOrgs(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SearchMyProjectOrgs", reflect.TypeOf((*MockAuthServiceClient)(nil).SearchMyProjectOrgs), varargs...)
}

// SearchMyUserGrant mocks base method
func (m *MockAuthServiceClient) SearchMyUserGrant(arg0 context.Context, arg1 *grpc.UserGrantSearchRequest, arg2 ...grpc0.CallOption) (*grpc.UserGrantSearchResponse, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "SearchMyUserGrant", varargs...)
	ret0, _ := ret[0].(*grpc.UserGrantSearchResponse)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// SearchMyUserGrant indicates an expected call of SearchMyUserGrant
func (mr *MockAuthServiceClientMockRecorder) SearchMyUserGrant(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SearchMyUserGrant", reflect.TypeOf((*MockAuthServiceClient)(nil).SearchMyUserGrant), varargs...)
}

// UpdateMyUserAddress mocks base method
func (m *MockAuthServiceClient) UpdateMyUserAddress(arg0 context.Context, arg1 *grpc.UpdateUserAddressRequest, arg2 ...grpc0.CallOption) (*grpc.UserAddress, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "UpdateMyUserAddress", varargs...)
	ret0, _ := ret[0].(*grpc.UserAddress)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateMyUserAddress indicates an expected call of UpdateMyUserAddress
func (mr *MockAuthServiceClientMockRecorder) UpdateMyUserAddress(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateMyUserAddress", reflect.TypeOf((*MockAuthServiceClient)(nil).UpdateMyUserAddress), varargs...)
}

// UpdateMyUserProfile mocks base method
func (m *MockAuthServiceClient) UpdateMyUserProfile(arg0 context.Context, arg1 *grpc.UpdateUserProfileRequest, arg2 ...grpc0.CallOption) (*grpc.UserProfile, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "UpdateMyUserProfile", varargs...)
	ret0, _ := ret[0].(*grpc.UserProfile)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// UpdateMyUserProfile indicates an expected call of UpdateMyUserProfile
func (mr *MockAuthServiceClientMockRecorder) UpdateMyUserProfile(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateMyUserProfile", reflect.TypeOf((*MockAuthServiceClient)(nil).UpdateMyUserProfile), varargs...)
}

// Validate mocks base method
func (m *MockAuthServiceClient) Validate(arg0 context.Context, arg1 *emptypb.Empty, arg2 ...grpc0.CallOption) (*structpb.Struct, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "Validate", varargs...)
	ret0, _ := ret[0].(*structpb.Struct)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Validate indicates an expected call of Validate
func (mr *MockAuthServiceClientMockRecorder) Validate(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Validate", reflect.TypeOf((*MockAuthServiceClient)(nil).Validate), varargs...)
}

// VerifyMfaOTP mocks base method
func (m *MockAuthServiceClient) VerifyMfaOTP(arg0 context.Context, arg1 *grpc.VerifyMfaOtp, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "VerifyMfaOTP", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// VerifyMfaOTP indicates an expected call of VerifyMfaOTP
func (mr *MockAuthServiceClientMockRecorder) VerifyMfaOTP(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "VerifyMfaOTP", reflect.TypeOf((*MockAuthServiceClient)(nil).VerifyMfaOTP), varargs...)
}

// VerifyMyUserEmail mocks base method
func (m *MockAuthServiceClient) VerifyMyUserEmail(arg0 context.Context, arg1 *grpc.VerifyMyUserEmailRequest, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "VerifyMyUserEmail", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// VerifyMyUserEmail indicates an expected call of VerifyMyUserEmail
func (mr *MockAuthServiceClientMockRecorder) VerifyMyUserEmail(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "VerifyMyUserEmail", reflect.TypeOf((*MockAuthServiceClient)(nil).VerifyMyUserEmail), varargs...)
}

// VerifyMyUserPhone mocks base method
func (m *MockAuthServiceClient) VerifyMyUserPhone(arg0 context.Context, arg1 *grpc.VerifyUserPhoneRequest, arg2 ...grpc0.CallOption) (*emptypb.Empty, error) {
	m.ctrl.T.Helper()
	varargs := []interface{}{arg0, arg1}
	for _, a := range arg2 {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "VerifyMyUserPhone", varargs...)
	ret0, _ := ret[0].(*emptypb.Empty)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// VerifyMyUserPhone indicates an expected call of VerifyMyUserPhone
func (mr *MockAuthServiceClientMockRecorder) VerifyMyUserPhone(arg0, arg1 interface{}, arg2 ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{arg0, arg1}, arg2...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "VerifyMyUserPhone", reflect.TypeOf((*MockAuthServiceClient)(nil).VerifyMyUserPhone), varargs...)
}
