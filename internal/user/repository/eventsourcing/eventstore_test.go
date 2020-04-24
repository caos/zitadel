package eventsourcing

import (
	"context"
	"github.com/caos/zitadel/internal/api/auth"
	caos_errs "github.com/caos/zitadel/internal/errors"
	es_models "github.com/caos/zitadel/internal/eventstore/models"
	"github.com/caos/zitadel/internal/user/model"
	"github.com/golang/mock/gomock"
	"testing"
	"time"
)

func TestUserByID(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es   *UserEventstore
		user *model.User
	}
	type res struct {
		user    *model.User
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "user from events, ok",
			args: args{
				es:   GetMockUserByIDOK(ctrl),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
		},
		{
			name: "no events found",
			args: args{
				es:   GetMockUserByIDNoEvents(ctrl),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
		{
			name: "no id",
			args: args{
				es:   GetMockUserByIDNoEvents(ctrl),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.UserByID(nil, tt.args.user.AggregateID)

			if !tt.res.wantErr && result.AggregateID != tt.res.user.AggregateID {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.user.AggregateID, result.AggregateID)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestCreateUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es   *UserEventstore
		ctx  context.Context
		user *model.User
	}
	type res struct {
		user    *model.User
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "create user, ok",
			args: args{
				es:  GetMockManipulateUserWithPWGenerator(ctrl, true, false, false, false),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{
					ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "UserName",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress:    "EmailAddress",
						IsEmailVerified: true,
					},
				},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "UserName",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
			},
		},
		{
			name: "no username, should use email",
			args: args{
				es:  GetMockManipulateUserWithPWGenerator(ctrl, true, false, false, false),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress:    "EmailAddress",
						IsEmailVerified: true,
					},
				},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "EmailAddress",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
			},
		},
		{
			name: "with phone code",
			args: args{
				es:  GetMockManipulateUserWithPWGenerator(ctrl, true, false, false, false),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						FirstName: "FirstName",
						LastName:  "LastName",
						UserName:  "UserName",
					},
					Email: &model.Email{
						EmailAddress:    "UserName",
						IsEmailVerified: true,
					},
					Phone: &model.Phone{
						PhoneNumber:     "UserName",
						IsPhoneVerified: true,
					},
				},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "UserName",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
			},
		},
		{
			name: "with password",
			args: args{
				es:  GetMockManipulateUserWithPWGenerator(ctrl, false, false, false, true),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						FirstName: "FirstName",
						LastName:  "LastName",
						UserName:  "UserName",
					},
					Password: &model.Password{SecretString: "Password"},
					Email: &model.Email{
						EmailAddress:    "UserName",
						IsEmailVerified: true,
					},
					Phone: &model.Phone{
						PhoneNumber:     "UserName",
						IsPhoneVerified: true,
					},
				},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "UserName",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
			},
		},
		{
			name: "create user invalid",
			args: args{
				es:   GetMockManipulateUser(ctrl),
				ctx:  auth.NewMockContext("orgID", "userID"),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.CreateUser(tt.args.ctx, tt.args.user)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.UserName != tt.res.user.UserName {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.user.UserName, result.UserName)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestRegisterUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es            *UserEventstore
		ctx           context.Context
		user          *model.User
		resourceOwner string
	}
	type res struct {
		user    *model.User
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "register user, ok",
			args: args{
				es:  GetMockManipulateUserWithPWGenerator(ctrl, false, true, false, true),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{
					ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "UserName",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
					Password: &model.Password{
						SecretString: "Password",
					},
				},
				resourceOwner: "ResourceOwner",
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "UserName",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
			},
		},
		{
			name: "no username, should use email",
			args: args{
				es:  GetMockManipulateUserWithPWGenerator(ctrl, false, true, false, true),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
					Password: &model.Password{
						SecretString: "Password",
					},
				},
				resourceOwner: "ResourceOwner",
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "EmailAddress",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
			},
		},
		{
			name: "register user invalid",
			args: args{
				es:            GetMockManipulateUser(ctrl),
				ctx:           auth.NewMockContext("orgID", "userID"),
				user:          &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1}},
				resourceOwner: "ResourceOwner",
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "register user no password",
			args: args{
				es:  GetMockManipulateUser(ctrl),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "EmailAddress",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
				resourceOwner: "ResourceOwner",
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "no resourceowner",
			args: args{
				es:  GetMockManipulateUser(ctrl),
				ctx: auth.NewMockContext("orgID", "userID"),
				user: &model.User{ObjectRoot: es_models.ObjectRoot{Sequence: 1},
					Profile: &model.Profile{
						UserName:  "EmailAddress",
						FirstName: "FirstName",
						LastName:  "LastName",
					},
					Email: &model.Email{
						EmailAddress: "EmailAddress",
					},
				},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.RegisterUser(tt.args.ctx, tt.args.user, tt.args.resourceOwner)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.UserName != tt.res.user.UserName {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.user.UserName, result.UserName)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestDeactivateUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		user    *model.User
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "deactivate user, ok",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, Profile: &model.Profile{UserName: "UserName"}, State: model.USERSTATE_INACTIVE},
			},
		},
		{
			name: "deactivate user with inactive state",
			args: args{
				es:       GetMockManipulateInactiveUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.DeactivateUser(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.State != tt.res.user.State {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.user.State, result.State)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestReactivateUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		user    *model.User
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "reactivate user, ok",
			args: args{
				es:       GetMockManipulateInactiveUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, Profile: &model.Profile{UserName: "UserName"}, State: model.USERSTATE_ACTIVE},
			},
		},
		{
			name: "reactivate user with inital state",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.ReactivateUser(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.State != tt.res.user.State {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.user.State, result.State)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestLockUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		user    *model.User
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "lock user, ok",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, Profile: &model.Profile{UserName: "UserName"}, State: model.USERSTATE_LOCKED},
			},
		},
		{
			name: "lock user with locked state",
			args: args{
				es:       GetMockManipulateLockedUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.LockUser(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.State != tt.res.user.State {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.user.State, result.State)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestUnlockUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		user    *model.User
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "lock user, ok",
			args: args{
				es:       GetMockManipulateLockedUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				user: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, Profile: &model.Profile{UserName: "UserName"}, State: model.USERSTATE_ACTIVE},
			},
		},
		{
			name: "lock user not locked state",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.UnlockUser(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.State != tt.res.user.State {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.user.State, result.State)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestGetInitCodeByID(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		code    *model.InitUserCode
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "get by id, ok",
			args: args{
				es:       GetMockManipulateUserWithInitCode(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				code: &model.InitUserCode{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, Expiry: time.Hour * 30},
			},
		},
		{
			name: "no userid",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.InitializeUserCodeByID(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.Expiry != tt.res.code.Expiry {
				t.Errorf("got wrong result name: expected: %v, actual: %v ", tt.res.code.Expiry, result.Expiry)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestCreateInitCode(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		code    *model.InitUserCode
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "create init code",
			args: args{
				es:       GetMockManipulateUserWithPWGenerator(ctrl, true, false, false, false),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				code: &model.InitUserCode{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, Expiry: time.Hour * 1},
			},
		},
		{
			name: "no userid",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.CreateInitializeUserCodeByID(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.Expiry != tt.res.code.Expiry {
				t.Errorf("got wrong result expiry: expected: %v, actual: %v ", tt.res.code.Expiry, result.Expiry)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestSkipMfaInit(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "create init code",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{},
		},
		{
			name: "no userid",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.args.es.SkipMfaInit(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && err != nil {
				t.Errorf("rshould not get err")
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestPasswordID(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		password *model.Password
		wantErr  bool
		errFunc  func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "get by id, ok",
			args: args{
				es:       GetMockManipulateUserFull(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, ChangeRequired: true},
			},
		},
		{
			name: "no userid",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing user not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
		{
			name: "existing pw not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.UserPasswordByID(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.ChangeRequired != tt.res.password.ChangeRequired {
				t.Errorf("got wrong result change required: expected: %v, actual: %v ", tt.res.password.ChangeRequired, result.ChangeRequired)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestSetOneTimePassword(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		password *model.Password
	}
	type res struct {
		password *model.Password
		wantErr  bool
		errFunc  func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "create one time pw",
			args: args{
				es:       GetMockManipulateUserWithPWGenerator(ctrl, false, false, false, true),
				ctx:      auth.NewMockContext("orgID", "userID"),
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID"}, SecretString: "Password"},
			},
			res: res{
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, ChangeRequired: true},
			},
		},
		{
			name: "no userid",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: ""}, SecretString: "Password"},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID"}, SecretString: "Password"},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.SetOneTimePassword(tt.args.ctx, tt.args.password)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.ChangeRequired != true {
				t.Errorf("should be one time")
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestSetPassword(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		password *model.Password
	}
	type res struct {
		password *model.Password
		wantErr  bool
		errFunc  func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "create pw",
			args: args{
				es:       GetMockManipulateUserWithPWGenerator(ctrl, false, false, false, true),
				ctx:      auth.NewMockContext("orgID", "userID"),
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID"}, SecretString: "Password"},
			},
			res: res{
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, ChangeRequired: false},
			},
		},
		{
			name: "no userid",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: ""}, SecretString: "Password"},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID"}, SecretString: "Password"},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.SetPassword(tt.args.ctx, tt.args.password)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.ChangeRequired != false {
				t.Errorf("should not be one time")
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestRequestSetPassword(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es         *UserEventstore
		ctx        context.Context
		userID     string
		notifyType model.NotificationType
	}
	type res struct {
		password *model.Password
		wantErr  bool
		errFunc  func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "create pw",
			args: args{
				es:         GetMockManipulateUserWithPWGenerator(ctrl, false, false, false, true),
				ctx:        auth.NewMockContext("orgID", "userID"),
				userID:     "AggregateID",
				notifyType: model.NOTIFICATIONTYPE_EMAIL,
			},
			res: res{
				password: &model.Password{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, ChangeRequired: false},
			},
		},
		{
			name: "no userid",
			args: args{
				es:         GetMockManipulateUser(ctrl),
				notifyType: model.NOTIFICATIONTYPE_EMAIL,
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing not found",
			args: args{
				es:         GetMockManipulateUserNoEvents(ctrl),
				ctx:        auth.NewMockContext("orgID", "userID"),
				userID:     "AggregateID",
				notifyType: model.NOTIFICATIONTYPE_EMAIL,
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.args.es.RequestSetPassword(tt.args.ctx, tt.args.userID, tt.args.notifyType)

			if !tt.res.wantErr && err != nil {
				t.Errorf("should not get err")
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestProfileByID(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es       *UserEventstore
		ctx      context.Context
		existing *model.User
	}
	type res struct {
		profile *model.Profile
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "get by id, ok",
			args: args{
				es:       GetMockManipulateUserFull(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				profile: &model.Profile{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, UserName: "UserName"},
			},
		},
		{
			name: "no userid",
			args: args{
				es:       GetMockManipulateUser(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing user not found",
			args: args{
				es:       GetMockManipulateUserNoEvents(ctrl),
				ctx:      auth.NewMockContext("orgID", "userID"),
				existing: &model.User{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.ProfileByID(tt.args.ctx, tt.args.existing.AggregateID)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.UserName != tt.res.profile.UserName {
				t.Errorf("got wrong result change required: expected: %v, actual: %v ", tt.res.profile.UserName, result.UserName)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}

func TestChangeProfile(t *testing.T) {
	ctrl := gomock.NewController(t)
	type args struct {
		es      *UserEventstore
		ctx     context.Context
		profile *model.Profile
	}
	type res struct {
		profile *model.Profile
		wantErr bool
		errFunc func(err error) bool
	}
	tests := []struct {
		name string
		args args
		res  res
	}{
		{
			name: "get by id, ok",
			args: args{
				es:      GetMockManipulateUserFull(ctrl),
				ctx:     auth.NewMockContext("orgID", "userID"),
				profile: &model.Profile{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, FirstName: "FirstName Changed", LastName: "LastName Changed"},
			},
			res: res{
				profile: &model.Profile{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, FirstName: "FirstName Changed", LastName: "LastName Changed"},
			},
		},
		{
			name: "invalid profile",
			args: args{
				es:      GetMockManipulateUser(ctrl),
				ctx:     auth.NewMockContext("orgID", "userID"),
				profile: &model.Profile{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "existing user not found",
			args: args{
				es:      GetMockManipulateUserNoEvents(ctrl),
				ctx:     auth.NewMockContext("orgID", "userID"),
				profile: &model.Profile{ObjectRoot: es_models.ObjectRoot{AggregateID: "AggregateID", Sequence: 1}, FirstName: "FirstName Changed", LastName: "LastName Changed"},
			},
			res: res{
				wantErr: true,
				errFunc: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := tt.args.es.ChangeProfile(tt.args.ctx, tt.args.profile)

			if !tt.res.wantErr && result.AggregateID == "" {
				t.Errorf("result has no id")
			}
			if !tt.res.wantErr && result.FirstName != tt.res.profile.FirstName {
				t.Errorf("got wrong result change required: expected: %v, actual: %v ", tt.res.profile.FirstName, result.FirstName)
			}
			if tt.res.wantErr && !tt.res.errFunc(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}
