package eventstore

import (
	"context"
	"github.com/caos/zitadel/internal/config/systemdefaults"
	iam_model "github.com/caos/zitadel/internal/iam/model"
	iam_es_model "github.com/caos/zitadel/internal/iam/repository/view/model"
	"time"

	"github.com/caos/logging"

	"github.com/caos/zitadel/internal/auth/repository/eventsourcing/view"
	"github.com/caos/zitadel/internal/auth_request/model"
	cache "github.com/caos/zitadel/internal/auth_request/repository"
	"github.com/caos/zitadel/internal/errors"
	es_models "github.com/caos/zitadel/internal/eventstore/models"
	"github.com/caos/zitadel/internal/id"
	org_model "github.com/caos/zitadel/internal/org/model"
	org_view_model "github.com/caos/zitadel/internal/org/repository/view/model"
	user_model "github.com/caos/zitadel/internal/user/model"
	user_event "github.com/caos/zitadel/internal/user/repository/eventsourcing"
	es_model "github.com/caos/zitadel/internal/user/repository/eventsourcing/model"
	user_view_model "github.com/caos/zitadel/internal/user/repository/view/model"
)

type AuthRequestRepo struct {
	UserEvents   *user_event.UserEventstore
	AuthRequests cache.AuthRequestCache
	View         *view.View

	UserSessionViewProvider userSessionViewProvider
	UserViewProvider        userViewProvider
	UserEventProvider       userEventProvider
	OrgViewProvider         orgViewProvider

	IdGenerator id.Generator

	PasswordCheckLifeTime    time.Duration
	MfaInitSkippedLifeTime   time.Duration
	MfaSoftwareCheckLifeTime time.Duration
	MfaHardwareCheckLifeTime time.Duration

	SystemDefaults systemdefaults.SystemDefaults
}

type userSessionViewProvider interface {
	UserSessionByIDs(string, string) (*user_view_model.UserSessionView, error)
	UserSessionsByAgentID(string) ([]*user_view_model.UserSessionView, error)
}
type userViewProvider interface {
	UserByID(string) (*user_view_model.UserView, error)
}

type userEventProvider interface {
	UserEventsByID(ctx context.Context, id string, sequence uint64) ([]*es_models.Event, error)
}

type orgViewProvider interface {
	OrgByID(string) (*org_view_model.OrgView, error)
}

func (repo *AuthRequestRepo) Health(ctx context.Context) error {
	if err := repo.UserEvents.Health(ctx); err != nil {
		return err
	}
	return repo.AuthRequests.Health(ctx)
}

func (repo *AuthRequestRepo) CreateAuthRequest(ctx context.Context, request *model.AuthRequest) (*model.AuthRequest, error) {
	reqID, err := repo.IdGenerator.Next()
	if err != nil {
		return nil, err
	}
	request.ID = reqID
	ids, err := repo.View.AppIDsFromProjectByClientID(ctx, request.ApplicationID)
	if err != nil {
		return nil, err
	}
	request.Audience = ids
	if request.LoginHint != "" {
		err = repo.checkLoginName(ctx, request, request.LoginHint)
		logging.LogWithFields("EVENT-aG311", "login name", request.LoginHint, "id", request.ID, "applicationID", request.ApplicationID).Debug("login hint invalid")
	}
	err = repo.AuthRequests.SaveAuthRequest(ctx, request)
	if err != nil {
		return nil, err
	}
	return request, nil
}

func (repo *AuthRequestRepo) AuthRequestByID(ctx context.Context, id, userAgentID string) (*model.AuthRequest, error) {
	return repo.getAuthRequestNextSteps(ctx, id, userAgentID, false)
}

func (repo *AuthRequestRepo) AuthRequestByIDCheckLoggedIn(ctx context.Context, id, userAgentID string) (*model.AuthRequest, error) {
	return repo.getAuthRequestNextSteps(ctx, id, userAgentID, true)
}

func (repo *AuthRequestRepo) SaveAuthCode(ctx context.Context, id, code, userAgentID string) error {
	request, err := repo.getAuthRequest(ctx, id, userAgentID)
	if err != nil {
		return err
	}
	request.Code = code
	return repo.AuthRequests.UpdateAuthRequest(ctx, request)
}

func (repo *AuthRequestRepo) AuthRequestByCode(ctx context.Context, code string) (*model.AuthRequest, error) {
	request, err := repo.AuthRequests.GetAuthRequestByCode(ctx, code)
	if err != nil {
		return nil, err
	}
	steps, err := repo.nextSteps(ctx, request, true)
	if err != nil {
		return nil, err
	}
	request.PossibleSteps = steps
	return request, nil
}

func (repo *AuthRequestRepo) DeleteAuthRequest(ctx context.Context, id string) error {
	return repo.AuthRequests.DeleteAuthRequest(ctx, id)
}

func (repo *AuthRequestRepo) CheckLoginName(ctx context.Context, id, loginName, userAgentID string) error {
	request, err := repo.getAuthRequest(ctx, id, userAgentID)
	if err != nil {
		return err
	}
	err = repo.checkLoginName(ctx, request, loginName)
	if err != nil {
		return err
	}
	return repo.AuthRequests.UpdateAuthRequest(ctx, request)
}

func (repo *AuthRequestRepo) SelectExternalIDP(ctx context.Context, authReqID, idpConfigID, userAgentID string) error {
	request, err := repo.getAuthRequest(ctx, authReqID, userAgentID)
	if err != nil {
		return err
	}
	err = repo.checkSelectedExternalIDP(request, idpConfigID)
	if err != nil {
		return err
	}
	return repo.AuthRequests.UpdateAuthRequest(ctx, request)
}

func (repo *AuthRequestRepo) CheckExternalUserLogin(ctx context.Context, authReqID, userAgentID string, externalUser *model.ExternalUser) error {
	request, err := repo.getAuthRequest(ctx, authReqID, userAgentID)
	if err != nil {
		return err
	}
	err = repo.checkExternalUserLogin(request, externalUser.IDPConfigID, externalUser.ExternalUserID)
	if errors.IsNotFound(err) {
		return repo.SetLinkingUser(ctx, request, externalUser, userAgentID)
	}
	if err != nil {
		return err
	}
	return repo.AuthRequests.UpdateAuthRequest(ctx, request)
}

func (repo *AuthRequestRepo) SetLinkingUser(ctx context.Context, request *model.AuthRequest, externalUser *model.ExternalUser, userAgentID string) error {
	request.LinkingUsers = append(request.LinkingUsers, externalUser)
	return repo.AuthRequests.UpdateAuthRequest(ctx, request)
}

func (repo *AuthRequestRepo) SelectUser(ctx context.Context, id, userID, userAgentID string) error {
	request, err := repo.getAuthRequest(ctx, id, userAgentID)
	if err != nil {
		return err
	}
	user, err := activeUserByID(ctx, repo.UserViewProvider, repo.UserEventProvider, repo.OrgViewProvider, userID)
	if err != nil {
		return err
	}
	request.SetUserInfo(user.ID, user.PreferredLoginName, user.DisplayName, user.ResourceOwner)
	return repo.AuthRequests.UpdateAuthRequest(ctx, request)
}

func (repo *AuthRequestRepo) VerifyPassword(ctx context.Context, id, userID, password, userAgentID string, info *model.BrowserInfo) error {
	request, err := repo.getAuthRequest(ctx, id, userAgentID)
	if err != nil {
		return err
	}
	if request.UserID != userID {
		return errors.ThrowPreconditionFailed(nil, "EVENT-ds35D", "Errors.User.NotMatchingUserID")
	}
	return repo.UserEvents.CheckPassword(ctx, userID, password, request.WithCurrentInfo(info))
}

func (repo *AuthRequestRepo) VerifyMfaOTP(ctx context.Context, authRequestID, userID, code, userAgentID string, info *model.BrowserInfo) error {
	request, err := repo.getAuthRequest(ctx, authRequestID, userAgentID)
	if err != nil {
		return err
	}
	if request.UserID != userID {
		return errors.ThrowPreconditionFailed(nil, "EVENT-ADJ26", "Errors.User.NotMatchingUserID")
	}
	return repo.UserEvents.CheckMfaOTP(ctx, userID, code, request.WithCurrentInfo(info))
}

func (repo *AuthRequestRepo) AddUserExternalIDPs(ctx context.Context, userID string, externalLogins []*model.ExternalUser) error {
	for _, externalLogin := range externalLogins {
		externalIDP := &user_model.ExternalIDP{
			ObjectRoot: es_models.ObjectRoot{
				AggregateID: userID,
			},
			IDPConfigID: externalLogin.IDPConfigID,
			UserID:      externalLogin.ExternalUserID,
			DisplayName: externalLogin.DisplayName,
		}
		externalIDP, err := repo.UserEvents.AddExternalIDP(ctx, externalIDP)
		if err != nil {
			return nil
		}
	}
	return nil
}

func (repo *AuthRequestRepo) getAuthRequestNextSteps(ctx context.Context, id, userAgentID string, checkLoggedIn bool) (*model.AuthRequest, error) {
	request, err := repo.getAuthRequest(ctx, id, userAgentID)
	if err != nil {
		return nil, err
	}
	steps, err := repo.nextSteps(ctx, request, checkLoggedIn)
	if err != nil {
		return nil, err
	}
	request.PossibleSteps = steps
	err = repo.fillLoginPolicy(ctx, request)
	if err != nil {
		return nil, err
	}
	return request, nil
}

func (repo *AuthRequestRepo) getAuthRequest(ctx context.Context, id, userAgentID string) (*model.AuthRequest, error) {
	request, err := repo.AuthRequests.GetAuthRequestByID(ctx, id)
	if err != nil {
		return nil, err
	}
	if request.AgentID != userAgentID {
		return nil, errors.ThrowPermissionDenied(nil, "EVENT-adk13", "Errors.AuthRequest.UserAgentNotCorresponding")
	}
	err = repo.fillLoginPolicy(ctx, request)
	if err != nil {
		return nil, err
	}
	return request, nil
}

func (repo *AuthRequestRepo) getLoginPolicyAndIDPProviders(ctx context.Context, orgID string) (*iam_model.LoginPolicyView, []*iam_model.IDPProviderView, error) {
	policy, err := repo.getLoginPolicy(ctx, orgID)
	if err != nil {
		return nil, nil, err
	}
	if !policy.AllowExternalIDP {
		return policy, nil, nil
	}
	idpProviders, err := repo.getLoginPolicyIDPProviders(ctx, orgID, policy.Default)
	if err != nil {
		return nil, nil, err
	}
	return policy, idpProviders, nil
}

func (repo *AuthRequestRepo) fillLoginPolicy(ctx context.Context, request *model.AuthRequest) error {
	orgID := request.GetScopeOrgID()
	if orgID == "" {
		orgID = repo.SystemDefaults.IamID
	}

	policy, idpProviders, err := repo.getLoginPolicyAndIDPProviders(ctx, orgID)
	if err != nil {
		return err
	}
	request.LoginPolicy = policy
	if idpProviders != nil {
		request.AllowedExternalIDPs = idpProviders
	}
	return nil
}

func (repo *AuthRequestRepo) checkLoginName(ctx context.Context, request *model.AuthRequest, loginName string) (err error) {
	orgID := request.GetScopeOrgID()
	user := new(user_view_model.UserView)
	if orgID != "" {
		user, err = repo.View.UserByLoginNameAndResourceOwner(loginName, orgID)
	} else {
		user, err = repo.View.UserByLoginName(loginName)
		if err != nil {
			err = repo.checkLoginPolicyWithResourceOwner(ctx, request, user)
			if err != nil {
				return err
			}
		}
	}
	if err != nil {
		return err
	}

	request.SetUserInfo(user.ID, loginName, "", user.ResourceOwner)
	return nil
}

func (repo AuthRequestRepo) checkLoginPolicyWithResourceOwner(ctx context.Context, request *model.AuthRequest, user *user_view_model.UserView) error {
	loginPolicy, idpProviders, err := repo.getLoginPolicyAndIDPProviders(ctx, user.ResourceOwner)
	if err != nil {
		return err
	}
	if len(request.LinkingUsers) != 0 && loginPolicy.AllowExternalIDP {
		return errors.ThrowInvalidArgument(nil, "LOGIN-Dj89o", "Errors.User.NotAllowedToLink")
	}
	if len(request.LinkingUsers) != 0 {
		exists := linkingIDPConfigExistingInAllowedIDPs(request.LinkingUsers, idpProviders)
		if !exists {
			return errors.ThrowInvalidArgument(nil, "LOGIN-Dj89o", "Errors.User.NotAllowedToLink")
		}
	}
	request.LoginPolicy = loginPolicy
	request.AllowedExternalIDPs = idpProviders
	return nil
}

func (repo *AuthRequestRepo) checkSelectedExternalIDP(request *model.AuthRequest, idpConfigID string) error {
	orgID := request.GetScopeOrgID()
	if orgID == "" {
		orgID = repo.SystemDefaults.IamID
	}
	_, err := repo.View.IDPProviderByAggregateAndIDPConfigID(orgID, idpConfigID)
	if err != nil {
		return err
	}
	request.SelectedIDPConfigID = idpConfigID
	return nil
}

func (repo *AuthRequestRepo) checkExternalUserLogin(request *model.AuthRequest, idpConfigID, externalUserID string) (err error) {
	orgID := request.GetScopeOrgID()
	externalIDP := new(user_view_model.ExternalIDPView)
	if orgID != "" {
		externalIDP, err = repo.View.ExternalIDPByExternalUserIDAndIDPConfigIDAndResourceOwner(externalUserID, idpConfigID, orgID)
	} else {
		externalIDP, err = repo.View.ExternalIDPByExternalUserIDAndIDPConfigID(externalUserID, idpConfigID)
	}
	if err != nil {
		return err
	}
	request.SetUserInfo(externalIDP.UserID, "", "", externalIDP.ResourceOwner)
	return nil
}

func (repo *AuthRequestRepo) nextSteps(ctx context.Context, request *model.AuthRequest, checkLoggedIn bool) ([]model.NextStep, error) {
	if request == nil {
		return nil, errors.ThrowInvalidArgument(nil, "EVENT-ds27a", "Errors.Internal")
	}
	steps := make([]model.NextStep, 0)
	if !checkLoggedIn && request.Prompt == model.PromptNone {
		return append(steps, &model.RedirectToCallbackStep{}), nil
	}
	if request.UserID == "" {
		steps = append(steps, new(model.LoginStep))
		if request.Prompt == model.PromptSelectAccount || request.Prompt == model.PromptUnspecified {
			users, err := repo.usersForUserSelection(request)
			if err != nil {
				return nil, err
			}
			if len(users) > 0 || request.Prompt == model.PromptSelectAccount {
				steps = append(steps, &model.SelectUserStep{Users: users})
			}
		}
		return steps, nil
	}
	user, err := activeUserByID(ctx, repo.UserViewProvider, repo.UserEventProvider, repo.OrgViewProvider, request.UserID)
	if err != nil {
		return nil, err
	}
	request.LoginName = user.PreferredLoginName
	userSession, err := userSessionByIDs(ctx, repo.UserSessionViewProvider, repo.UserEventProvider, request.AgentID, user)
	if err != nil {
		return nil, err
	}

	if user.InitRequired {
		return append(steps, &model.InitUserStep{PasswordSet: user.PasswordSet}), nil
	}
	if !user.PasswordSet {
		return append(steps, &model.InitPasswordStep{}), nil
	}

	if !checkVerificationTime(userSession.PasswordVerification, repo.PasswordCheckLifeTime) {
		return append(steps, &model.PasswordStep{}), nil
	}
	request.PasswordVerified = true
	request.AuthTime = userSession.PasswordVerification

	if step, ok := repo.mfaChecked(userSession, request, user); !ok {
		return append(steps, step), nil
	}

	if user.PasswordChangeRequired {
		steps = append(steps, &model.ChangePasswordStep{})
	}
	if !user.IsEmailVerified {
		steps = append(steps, &model.VerifyEMailStep{})
	}
	if user.UsernameChangeRequired {
		steps = append(steps, &model.ChangeUsernameStep{})
	}

	if user.PasswordChangeRequired || !user.IsEmailVerified || user.UsernameChangeRequired {
		return steps, nil
	}

	if len(request.LinkingUsers) != 0 {

	}
	//PLANNED: consent step
	return append(steps, &model.RedirectToCallbackStep{}), nil
}

func (repo *AuthRequestRepo) usersForUserSelection(request *model.AuthRequest) ([]model.UserSelection, error) {
	userSessions, err := userSessionsByUserAgentID(repo.UserSessionViewProvider, request.AgentID)
	if err != nil {
		return nil, err
	}
	users := make([]model.UserSelection, len(userSessions))
	for i, session := range userSessions {
		users[i] = model.UserSelection{
			UserID:           session.UserID,
			DisplayName:      session.DisplayName,
			LoginName:        session.LoginName,
			UserSessionState: session.State,
		}
	}
	return users, nil
}

func (repo *AuthRequestRepo) mfaChecked(userSession *user_model.UserSessionView, request *model.AuthRequest, user *user_model.UserView) (model.NextStep, bool) {
	mfaLevel := request.MfaLevel()
	promptRequired := user.MfaMaxSetUp < mfaLevel
	if promptRequired || !repo.mfaSkippedOrSetUp(user) {
		return &model.MfaPromptStep{
			Required:     promptRequired,
			MfaProviders: user.MfaTypesSetupPossible(mfaLevel),
		}, false
	}
	switch mfaLevel {
	default:
		fallthrough
	case model.MfaLevelNotSetUp:
		if user.MfaMaxSetUp == model.MfaLevelNotSetUp {
			return nil, true
		}
		fallthrough
	case model.MfaLevelSoftware:
		if checkVerificationTime(userSession.MfaSoftwareVerification, repo.MfaSoftwareCheckLifeTime) {
			request.MfasVerified = append(request.MfasVerified, userSession.MfaSoftwareVerificationType)
			request.AuthTime = userSession.MfaSoftwareVerification
			return nil, true
		}
		fallthrough
	case model.MfaLevelHardware:
		if checkVerificationTime(userSession.MfaHardwareVerification, repo.MfaHardwareCheckLifeTime) {
			request.MfasVerified = append(request.MfasVerified, userSession.MfaHardwareVerificationType)
			request.AuthTime = userSession.MfaHardwareVerification
			return nil, true
		}
	}
	return &model.MfaVerificationStep{
		MfaProviders: user.MfaTypesAllowed(mfaLevel),
	}, false
}

func (repo *AuthRequestRepo) mfaSkippedOrSetUp(user *user_model.UserView) bool {
	if user.MfaMaxSetUp > model.MfaLevelNotSetUp {
		return true
	}
	return checkVerificationTime(user.MfaInitSkipped, repo.MfaInitSkippedLifeTime)
}

func (repo *AuthRequestRepo) getLoginPolicy(ctx context.Context, orgID string) (*iam_model.LoginPolicyView, error) {
	policy, err := repo.View.LoginPolicyByAggregateID(orgID)
	if errors.IsNotFound(err) {
		policy, err = repo.View.LoginPolicyByAggregateID(repo.SystemDefaults.IamID)
		if err != nil {
			return nil, err
		}
		policy.Default = true
	}
	if err != nil {
		return nil, err
	}
	return iam_es_model.LoginPolicyViewToModel(policy), err
}

func (repo *AuthRequestRepo) getLoginPolicyIDPProviders(ctx context.Context, orgID string, defaultPolicy bool) ([]*iam_model.IDPProviderView, error) {
	if defaultPolicy {
		idpProviders, err := repo.View.IDPProvidersByAggregateID(repo.SystemDefaults.IamID)
		if err != nil {
			return nil, err
		}
		return iam_es_model.IDPProviderViewsToModel(idpProviders), nil
	}
	idpProviders, err := repo.View.IDPProvidersByAggregateID(orgID)
	if err != nil {
		return nil, err
	}
	return iam_es_model.IDPProviderViewsToModel(idpProviders), nil
}

func checkVerificationTime(verificationTime time.Time, lifetime time.Duration) bool {
	return verificationTime.Add(lifetime).After(time.Now().UTC())
}

func userSessionsByUserAgentID(provider userSessionViewProvider, agentID string) ([]*user_model.UserSessionView, error) {
	session, err := provider.UserSessionsByAgentID(agentID)
	if err != nil {
		return nil, err
	}
	return user_view_model.UserSessionsToModel(session), nil
}

func userSessionByIDs(ctx context.Context, provider userSessionViewProvider, eventProvider userEventProvider, agentID string, user *user_model.UserView) (*user_model.UserSessionView, error) {
	session, err := provider.UserSessionByIDs(agentID, user.ID)
	if err != nil {
		if !errors.IsNotFound(err) {
			return nil, err
		}
		session = &user_view_model.UserSessionView{}
	}
	events, err := eventProvider.UserEventsByID(ctx, user.ID, session.Sequence)
	if err != nil {
		logging.Log("EVENT-Hse6s").WithError(err).Debug("error retrieving new events")
		return user_view_model.UserSessionToModel(session), nil
	}
	sessionCopy := *session
	for _, event := range events {
		switch event.Type {
		case es_model.UserPasswordCheckSucceeded,
			es_model.UserPasswordCheckFailed,
			es_model.MfaOtpCheckSucceeded,
			es_model.MfaOtpCheckFailed,
			es_model.SignedOut,
			es_model.UserLocked,
			es_model.UserDeactivated,
			es_model.HumanPasswordCheckSucceeded,
			es_model.HumanPasswordCheckFailed,
			es_model.HumanMfaOtpCheckSucceeded,
			es_model.HumanMfaOtpCheckFailed,
			es_model.HumanSignedOut:
			eventData, err := user_view_model.UserSessionFromEvent(event)
			if err != nil {
				logging.Log("EVENT-sdgT3").WithError(err).Debug("error getting event data")
				return user_view_model.UserSessionToModel(session), nil
			}
			if eventData.UserAgentID != agentID {
				continue
			}
		case es_model.UserRemoved:
			return nil, errors.ThrowPreconditionFailed(nil, "EVENT-dG2fe", "Errors.User.NotActive")
		}
		sessionCopy.AppendEvent(event)
	}
	return user_view_model.UserSessionToModel(&sessionCopy), nil
}

func activeUserByID(ctx context.Context, userViewProvider userViewProvider, userEventProvider userEventProvider, orgViewProvider orgViewProvider, userID string) (*user_model.UserView, error) {
	user, err := userByID(ctx, userViewProvider, userEventProvider, userID)
	if err != nil {
		return nil, err
	}

	if user.HumanView == nil {
		return nil, errors.ThrowPreconditionFailed(nil, "EVENT-Lm69x", "Errors.User.NotHuman")
	}

	if user.State == user_model.UserStateLocked || user.State == user_model.UserStateSuspend {
		return nil, errors.ThrowPreconditionFailed(nil, "EVENT-FJ262", "Errors.User.Locked")
	}
	if !(user.State == user_model.UserStateActive || user.State == user_model.UserStateInitial) {
		return nil, errors.ThrowPreconditionFailed(nil, "EVENT-FJ262", "Errors.User.NotActive")
	}
	org, err := orgViewProvider.OrgByID(user.ResourceOwner)
	if err != nil {
		return nil, err
	}
	if org.State != int32(org_model.OrgStateActive) {
		return nil, errors.ThrowPreconditionFailed(nil, "EVENT-Zws3s", "Errors.User.NotActive")
	}
	return user, nil
}

func userByID(ctx context.Context, viewProvider userViewProvider, eventProvider userEventProvider, userID string) (*user_model.UserView, error) {
	user, err := viewProvider.UserByID(userID)
	if err != nil {
		return nil, err
	}
	events, err := eventProvider.UserEventsByID(ctx, userID, user.Sequence)
	if err != nil {
		logging.Log("EVENT-dfg42").WithError(err).Debug("error retrieving new events")
		return user_view_model.UserToModel(user), nil
	}
	userCopy := *user
	for _, event := range events {
		if err := userCopy.AppendEvent(event); err != nil {
			return user_view_model.UserToModel(user), nil
		}
	}
	return user_view_model.UserToModel(&userCopy), nil
}

func linkingIDPConfigExistingInAllowedIDPs(linkingUsers []*model.ExternalUser, idpProviders []*iam_model.IDPProviderView) bool {
	for _, linkingUser := range linkingUsers {
		exists := false
		for _, idp := range idpProviders {
			if idp.IDPConfigID == linkingUser.IDPConfigID {
				exists = true
				continue
			}
		}
		if !exists {
			return false
		}
	}
	return true
}
