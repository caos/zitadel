package repository

import (
	"context"

	"github.com/caos/zitadel/internal/user/model"
)

type UserRepository interface {
	Register(ctx context.Context, user *model.User, resourceOwner string) (*model.User, error)

	myUserRepo
	SkipMfaInit(ctx context.Context, userID string) error
	RequestPasswordReset(ctx context.Context, username string) error
	SetPassword(ctx context.Context, userID, code, password string) error

	SignOut(ctx context.Context, agentID, userID string) error
}

type myUserRepo interface {
	MyProfile(ctx context.Context) (*model.Profile, error)
	ChangeMyProfile(ctx context.Context, profile *model.Profile) (*model.Profile, error)

	MyEmail(ctx context.Context) (*model.Email, error)
	ChangeMyEmail(ctx context.Context, email *model.Email) (*model.Email, error)
	VerifyMyEmail(ctx context.Context, code string) error
	ResendMyEmailVerificationMail(ctx context.Context) error

	MyPhone(ctx context.Context) (*model.Phone, error)
	ChangeMyPhone(ctx context.Context, phone *model.Phone) (*model.Phone, error)
	VerifyMyPhone(ctx context.Context, code string) error
	ResendMyPhoneVerificationCode(ctx context.Context) error

	MyAddress(ctx context.Context) (*model.Address, error)
	ChangeMyAddress(ctx context.Context, address *model.Address) (*model.Address, error)

	ChangeMyPassword(ctx context.Context, old, new string) error

	AddMyMfaOTP(ctx context.Context) (*model.OTP, error)
	VerifyMyMfaOTP(ctx context.Context, code string) (*model.OTP, error)
	RemoveMyMfaOTP(ctx context.Context) error
}
