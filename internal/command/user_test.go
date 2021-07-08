package command

import (
	"context"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"golang.org/x/text/language"

	"github.com/caos/zitadel/internal/domain"
	caos_errs "github.com/caos/zitadel/internal/errors"
	"github.com/caos/zitadel/internal/eventstore"
	"github.com/caos/zitadel/internal/eventstore/repository"
	iam_model "github.com/caos/zitadel/internal/iam/model"
	"github.com/caos/zitadel/internal/id"
	"github.com/caos/zitadel/internal/repository/iam"
	"github.com/caos/zitadel/internal/repository/member"
	"github.com/caos/zitadel/internal/repository/org"
	"github.com/caos/zitadel/internal/repository/project"
	"github.com/caos/zitadel/internal/repository/user"
)

func TestCommandSide_UsernameChange(t *testing.T) {
	type fields struct {
		eventstore *eventstore.Eventstore
	}
	type (
		args struct {
			ctx      context.Context
			orgID    string
			userID   string
			username string
		}
	)
	type res struct {
		want *domain.ObjectDetails
		err  func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		{
			name: "userid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "org1",
				userID:   "",
				username: "username",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "orgid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "",
				userID:   "user1",
				username: "username",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "username missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "org1",
				userID:   "user1",
				username: "",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "user removed, not found error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(),
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "org1",
				userID:   "user1",
				username: "username",
			},
			res: res{
				err: caos_errs.IsNotFound,
			},
		},
		{
			name: "username not changed, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "org1",
				userID:   "user1",
				username: "username",
			},
			res: res{
				err: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "org iam policy not found, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "org1",
				userID:   "user1",
				username: "username",
			},
			res: res{
				err: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "invalid username, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
					expectFilter(),
					expectFilter(
						eventFromEventPusher(
							iam.NewOrgIAMPolicyAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								true,
							),
						),
					),
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "org1",
				userID:   "user1",
				username: "test@test.ch",
			},
			res: res{
				err: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "change username, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
					expectFilter(),
					expectFilter(
						eventFromEventPusher(
							iam.NewOrgIAMPolicyAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								true,
							),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewUsernameChangedEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
									"username",
									"username1",
									true,
								),
							),
						},
						uniqueConstraintsFromEventConstraint(user.NewRemoveUsernameUniqueConstraint("username", "org1", true)),
						uniqueConstraintsFromEventConstraint(user.NewAddUsernameUniqueConstraint("username1", "org1", true)),
					),
				),
			},
			args: args{
				ctx:      context.Background(),
				orgID:    "org1",
				userID:   "user1",
				username: "username1",
			},
			res: res{
				want: &domain.ObjectDetails{
					ResourceOwner: "org1",
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore: tt.fields.eventstore,
			}
			got, err := r.ChangeUsername(tt.args.ctx, tt.args.orgID, tt.args.userID, tt.args.username)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
			if tt.res.err == nil {
				assert.Equal(t, tt.res.want, got)
			}
		})
	}
}

func TestCommandSide_DeactivateUser(t *testing.T) {
	type fields struct {
		eventstore *eventstore.Eventstore
	}
	type (
		args struct {
			ctx    context.Context
			orgID  string
			userID string
		}
	)
	type res struct {
		want *domain.ObjectDetails
		err  func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		{
			name: "userid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "user not existing, not found error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsNotFound,
			},
		},
		{
			name: "user already inactive, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
						eventFromEventPusher(
							user.NewUserDeactivatedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
							),
						),
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "deactivate user, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewUserDeactivatedEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
								),
							),
						},
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				want: &domain.ObjectDetails{
					ResourceOwner: "org1",
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore: tt.fields.eventstore,
			}
			got, err := r.DeactivateUser(tt.args.ctx, tt.args.userID, tt.args.orgID)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
			if tt.res.err == nil {
				assert.Equal(t, tt.res.want, got)
			}
		})
	}
}

func TestCommandSide_ReactivateUser(t *testing.T) {
	type fields struct {
		eventstore *eventstore.Eventstore
	}
	type (
		args struct {
			ctx    context.Context
			orgID  string
			userID string
		}
	)
	type res struct {
		want *domain.ObjectDetails
		err  func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		{
			name: "userid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "user not existing, not found error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsNotFound,
			},
		},
		{
			name: "user already active, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "reactivate user, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
						eventFromEventPusher(
							user.NewUserDeactivatedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewUserReactivatedEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
								),
							),
						},
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				want: &domain.ObjectDetails{
					ResourceOwner: "org1",
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore: tt.fields.eventstore,
			}
			got, err := r.ReactivateUser(tt.args.ctx, tt.args.userID, tt.args.orgID)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
			if tt.res.err == nil {
				assert.Equal(t, tt.res.want, got)
			}
		})
	}
}

func TestCommandSide_LockUser(t *testing.T) {
	type fields struct {
		eventstore *eventstore.Eventstore
	}
	type (
		args struct {
			ctx    context.Context
			orgID  string
			userID string
		}
	)
	type res struct {
		want *domain.ObjectDetails
		err  func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		{
			name: "userid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "user not existing, not found error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsNotFound,
			},
		},
		{
			name: "user already locked, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
						eventFromEventPusher(
							user.NewUserLockedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
							),
						),
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "lock user, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewUserLockedEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
								),
							),
						},
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				want: &domain.ObjectDetails{
					ResourceOwner: "org1",
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore: tt.fields.eventstore,
			}
			got, err := r.LockUser(tt.args.ctx, tt.args.userID, tt.args.orgID)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
			if tt.res.err == nil {
				assert.Equal(t, tt.res.want, got)
			}
		})
	}
}

func TestCommandSide_UnlockUser(t *testing.T) {
	type fields struct {
		eventstore *eventstore.Eventstore
	}
	type (
		args struct {
			ctx    context.Context
			orgID  string
			userID string
		}
	)
	type res struct {
		want *domain.ObjectDetails
		err  func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		{
			name: "userid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "user not existing, not found error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsNotFound,
			},
		},
		{
			name: "user already active, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsPreconditionFailed,
			},
		},
		{
			name: "unlock user, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
						eventFromEventPusher(
							user.NewUserLockedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewUserUnlockedEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
								),
							),
						},
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				want: &domain.ObjectDetails{
					ResourceOwner: "org1",
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore: tt.fields.eventstore,
			}
			got, err := r.UnlockUser(tt.args.ctx, tt.args.userID, tt.args.orgID)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
			if tt.res.err == nil {
				assert.Equal(t, tt.res.want, got)
			}
		})
	}
}

func TestCommandSide_RemoveUser(t *testing.T) {
	type fields struct {
		eventstore *eventstore.Eventstore
	}
	type (
		args struct {
			ctx                    context.Context
			orgID                  string
			userID                 string
			cascadeUserMemberships []*domain.UserMembership
			cascadeUserGrants      []string
			cascadeAuthConnectors  []*iam_model.IDPConfigView
		}
	)
	type res struct {
		want *domain.ObjectDetails
		err  func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		//{
		//	name: "userid missing, invalid argument error",
		//	fields: fields{
		//		eventstore: eventstoreExpect(
		//			t,
		//		),
		//	},
		//	args: args{
		//		ctx:    context.Background(),
		//		orgID:  "org1",
		//		userID: "",
		//	},
		//	res: res{
		//		err: caos_errs.IsErrorInvalidArgument,
		//	},
		//},
		//{
		//	name: "user not existing, not found error",
		//	fields: fields{
		//		eventstore: eventstoreExpect(
		//			t,
		//			expectFilter(),
		//		),
		//	},
		//	args: args{
		//		ctx:    context.Background(),
		//		orgID:  "org1",
		//		userID: "user1",
		//	},
		//	res: res{
		//		err: caos_errs.IsNotFound,
		//	},
		//},
		//{
		//	name: "org iam policy not found, precondition error",
		//	fields: fields{
		//		eventstore: eventstoreExpect(
		//			t,
		//			expectFilter(
		//				eventFromEventPusher(
		//					user.NewHumanAddedEvent(context.Background(),
		//						&user.NewAggregate("user1", "org1").Aggregate,
		//						"username",
		//						"firstname",
		//						"lastname",
		//						"nickname",
		//						"displayname",
		//						language.German,
		//						domain.GenderUnspecified,
		//						"email@test.ch",
		//						true,
		//					),
		//				),
		//			),
		//			expectFilter(),
		//			expectFilter(),
		//		),
		//	},
		//	args: args{
		//		ctx:    context.Background(),
		//		orgID:  "org1",
		//		userID: "user1",
		//	},
		//	res: res{
		//		err: caos_errs.IsPreconditionFailed,
		//	},
		//},
		//{
		//	name: "remove user, ok",
		//	fields: fields{
		//		eventstore: eventstoreExpect(
		//			t,
		//			expectFilter(
		//				eventFromEventPusher(
		//					user.NewHumanAddedEvent(context.Background(),
		//						&user.NewAggregate("user1", "org1").Aggregate,
		//						"username",
		//						"firstname",
		//						"lastname",
		//						"nickname",
		//						"displayname",
		//						language.German,
		//						domain.GenderUnspecified,
		//						"email@test.ch",
		//						true,
		//					),
		//				),
		//			),
		//			expectFilter(),
		//			expectFilter(
		//				eventFromEventPusher(
		//					iam.NewOrgIAMPolicyAddedEvent(context.Background(),
		//						&user.NewAggregate("user1", "org1").Aggregate,
		//						true,
		//					),
		//				),
		//			),
		//			expectPush(
		//				[]*repository.Event{
		//					eventFromEventPusher(
		//						user.NewUserRemovedEvent(context.Background(),
		//							&user.NewAggregate("user1", "org1").Aggregate,
		//							"username",
		//							true,
		//						),
		//					),
		//				},
		//				uniqueConstraintsFromEventConstraint(user.NewRemoveUsernameUniqueConstraint("username", "org1", true)),
		//			),
		//		),
		//	},
		//	args: args{
		//		ctx:    context.Background(),
		//		orgID:  "org1",
		//		userID: "user1",
		//	},
		//	res: res{
		//		want: &domain.ObjectDetails{
		//			ResourceOwner: "org1",
		//		},
		//	},
		//},
		{
			name: "remove machine user with auth connector, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
					expectFilter(),
					expectFilter(
						eventFromEventPusher(
							iam.NewOrgIAMPolicyAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								true,
							),
						),
					),
					expectFilter(
						eventFromEventPusher(
							org.NewIDPConfigAddedEvent(context.Background(),
								&org.NewAggregate("org1", "org1").Aggregate,
								"idpConfigOrg",
								"idpConfigOrg",
								domain.IDPConfigTypeAuthConnector,
								domain.IDPConfigStylingTypeUnspecified,
							),
						),
						eventFromEventPusher(
							org.NewIDPAuthConnectorConfigAddedEvent(context.Background(),
								&org.NewAggregate("org1", "org1").Aggregate,
								"idpConfigOrg",
								"baseURL",
								"",
								"user1",
							),
						),
						eventFromEventPusher(
							org.NewIDPConfigDeactivatedEvent(context.Background(),
								&org.NewAggregate("org1", "org1").Aggregate,
								"idpConfigOrg",
							),
						),
					),
					expectFilter(
						eventFromEventPusher(
							iam.NewIDPConfigAddedEvent(context.Background(),
								&iam.NewAggregate().Aggregate,
								"idpConfigIAM",
								"idpConfigIAM",
								domain.IDPConfigTypeAuthConnector,
								domain.IDPConfigStylingTypeUnspecified,
							),
						),
						eventFromEventPusher(
							iam.NewIDPAuthConnectorConfigAddedEvent(context.Background(),
								&iam.NewAggregate().Aggregate,
								"idpConfigIAM",
								"baseURL",
								"",
								"user1",
							),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewUserRemovedEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
									"username",
									true,
								),
							),
							eventFromEventPusher(
								org.NewIDPAuthConnectorMachineUserRemovedEvent(context.Background(),
									&org.NewAggregate("org1", "org1").Aggregate,
									"idpConfigOrg",
								),
							),
							eventFromEventPusher(
								iam.NewIDPAuthConnectorMachineUserRemovedEvent(context.Background(),
									&iam.NewAggregate().Aggregate,
									"idpConfigIAM",
								),
							),
							eventFromEventPusher(
								iam.NewIDPConfigDeactivatedEvent(context.Background(),
									&iam.NewAggregate().Aggregate,
									"idpConfigIAM",
								),
							),
						},
						uniqueConstraintsFromEventConstraint(user.NewRemoveUsernameUniqueConstraint("username", "org1", true)),
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
				cascadeAuthConnectors: []*iam_model.IDPConfigView{
					{
						AggregateID:     "org1",
						IDPConfigID:     "idpConfigOrg",
						IDPProviderType: iam_model.IDPProviderTypeOrg,
					},
					{
						AggregateID:     "IAM",
						IDPConfigID:     "idpConfigIAM",
						IDPProviderType: iam_model.IDPProviderTypeSystem,
					},
				},
			},
			res: res{
				want: &domain.ObjectDetails{
					ResourceOwner: "org1",
				},
			},
		},
		{
			name: "remove user with user memberships, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
					expectFilter(),
					expectFilter(
						eventFromEventPusher(
							iam.NewOrgIAMPolicyAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								true,
							),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewUserRemovedEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
									"username",
									true,
								),
							),
							eventFromEventPusher(
								iam.NewMemberCascadeRemovedEvent(context.Background(),
									&iam.NewAggregate().Aggregate,
									"user1",
								),
							),
							eventFromEventPusher(
								org.NewMemberCascadeRemovedEvent(context.Background(),
									&org.NewAggregate("org1", "org1").Aggregate,
									"user1",
								),
							),
							eventFromEventPusher(
								project.NewProjectMemberCascadeRemovedEvent(context.Background(),
									&project.NewAggregate("project1", "org1").Aggregate,
									"user1",
								),
							),
							eventFromEventPusher(
								project.NewProjectGrantMemberCascadeRemovedEvent(context.Background(),
									&project.NewAggregate("project1", "org1").Aggregate,
									"user1",
									"grant1",
								),
							),
						},
						uniqueConstraintsFromEventConstraint(user.NewRemoveUsernameUniqueConstraint("username", "org1", true)),
						uniqueConstraintsFromEventConstraint(member.NewRemoveMemberUniqueConstraint(domain.IAMID, "user1")),
						uniqueConstraintsFromEventConstraint(member.NewRemoveMemberUniqueConstraint("org1", "user1")),
						uniqueConstraintsFromEventConstraint(member.NewRemoveMemberUniqueConstraint("project1", "user1")),
						uniqueConstraintsFromEventConstraint(project.NewRemoveProjectGrantMemberUniqueConstraint("project1", "user1", "grant1")),
					),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
				cascadeUserMemberships: []*domain.UserMembership{
					{
						MemberType:    domain.MemberTypeIam,
						UserID:        "user1",
						AggregateID:   "IAM",
						ResourceOwner: "org1",
					},
					{
						MemberType:    domain.MemberTypeOrganisation,
						UserID:        "user1",
						ResourceOwner: "org1",
						AggregateID:   "org1",
					},
					{
						MemberType:    domain.MemberTypeProject,
						UserID:        "user1",
						ResourceOwner: "org1",
						AggregateID:   "project1",
					},
					{
						MemberType:    domain.MemberTypeProjectGrant,
						UserID:        "user1",
						ResourceOwner: "org1",
						AggregateID:   "project1",
						ObjectID:      "grant1",
					},
				},
			},
			res: res{
				want: &domain.ObjectDetails{
					ResourceOwner: "org1",
				},
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore: tt.fields.eventstore,
			}
			got, err := r.RemoveUser(tt.args.ctx, tt.args.userID, tt.args.orgID, tt.args.cascadeUserMemberships, tt.args.cascadeUserGrants, tt.args.cascadeAuthConnectors...)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
			if tt.res.err == nil {
				assert.Equal(t, tt.res.want, got)
			}
		})
	}
}

func TestCommandSide_AddUserToken(t *testing.T) {
	type fields struct {
		eventstore  *eventstore.Eventstore
		idGenerator id.Generator
	}
	type (
		args struct {
			ctx      context.Context
			orgID    string
			agentID  string
			clientID string
			userID   string
			audience []string
			scopes   []string
			lifetime time.Duration
		}
	)
	type res struct {
		want *domain.Token
		err  func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		{
			name: "userid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "user not existing, not found error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(),
				),
			},
			args: args{
				ctx:    context.Background(),
				orgID:  "org1",
				userID: "user1",
			},
			res: res{
				err: caos_errs.IsNotFound,
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore:  tt.fields.eventstore,
				idGenerator: tt.fields.idGenerator,
			}
			got, err := r.AddUserToken(tt.args.ctx, tt.args.orgID, tt.args.agentID, tt.args.clientID, tt.args.userID, tt.args.audience, tt.args.scopes, tt.args.lifetime)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
			if tt.res.err == nil {
				assert.Equal(t, tt.res.want, got)
			}
		})
	}
}

func TestCommandSide_UserDomainClaimedSent(t *testing.T) {
	type fields struct {
		eventstore *eventstore.Eventstore
	}
	type args struct {
		ctx           context.Context
		userID        string
		resourceOwner string
	}
	type res struct {
		err func(error) bool
	}
	tests := []struct {
		name   string
		fields fields
		args   args
		res    res
	}{
		{
			name: "userid missing, invalid argument error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
				),
			},
			args: args{
				ctx:           context.Background(),
				resourceOwner: "org1",
			},
			res: res{
				err: caos_errs.IsErrorInvalidArgument,
			},
		},
		{
			name: "user not existing, precondition error",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(),
				),
			},
			args: args{
				ctx:           context.Background(),
				userID:        "user1",
				resourceOwner: "org1",
			},
			res: res{
				err: caos_errs.IsNotFound,
			},
		},
		{
			name: "code sent, ok",
			fields: fields{
				eventstore: eventstoreExpect(
					t,
					expectFilter(
						eventFromEventPusher(
							user.NewHumanAddedEvent(context.Background(),
								&user.NewAggregate("user1", "org1").Aggregate,
								"username",
								"firstname",
								"lastname",
								"nickname",
								"displayname",
								language.German,
								domain.GenderUnspecified,
								"email@test.ch",
								true,
							),
						),
					),
					expectPush(
						[]*repository.Event{
							eventFromEventPusher(
								user.NewDomainClaimedSentEvent(context.Background(),
									&user.NewAggregate("user1", "org1").Aggregate,
								),
							),
						},
					),
				),
			},
			args: args{
				ctx:           context.Background(),
				userID:        "user1",
				resourceOwner: "org1",
			},
			res: res{},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := &Commands{
				eventstore: tt.fields.eventstore,
			}
			err := r.UserDomainClaimedSent(tt.args.ctx, tt.args.resourceOwner, tt.args.userID)
			if tt.res.err == nil {
				assert.NoError(t, err)
			}
			if tt.res.err != nil && !tt.res.err(err) {
				t.Errorf("got wrong err: %v ", err)
			}
		})
	}
}
