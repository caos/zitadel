package command

import (
	"github.com/caos/zitadel/internal/domain"
	"github.com/caos/zitadel/internal/eventstore"
	"github.com/caos/zitadel/internal/eventstore/v1/models"
)

func writeModelToObjectRoot(writeModel eventstore.WriteModel) models.ObjectRoot {
	return models.ObjectRoot{
		AggregateID:   writeModel.AggregateID,
		ChangeDate:    writeModel.ChangeDate,
		ResourceOwner: writeModel.ResourceOwner,
		Sequence:      writeModel.ProcessedSequence,
	}
}

func writeModelToIAM(wm *IAMWriteModel) *domain.IAM {
	return &domain.IAM{
		ObjectRoot:   writeModelToObjectRoot(wm.WriteModel),
		SetUpStarted: wm.SetUpStarted,
		SetUpDone:    wm.SetUpDone,
		GlobalOrgID:  wm.GlobalOrgID,
		IAMProjectID: wm.ProjectID,
	}
}

func memberWriteModelToMember(writeModel *MemberWriteModel) *domain.Member {
	return &domain.Member{
		ObjectRoot: writeModelToObjectRoot(writeModel.WriteModel),
		Roles:      writeModel.Roles,
		UserID:     writeModel.UserID,
	}
}

func writeModelToLoginPolicy(wm *LoginPolicyWriteModel) *domain.LoginPolicy {
	return &domain.LoginPolicy{
		ObjectRoot:            writeModelToObjectRoot(wm.WriteModel),
		AllowUsernamePassword: wm.AllowUserNamePassword,
		AllowRegister:         wm.AllowRegister,
		AllowExternalIDP:      wm.AllowExternalIDP,
		HidePasswordReset:     wm.HidePasswordReset,
		ForceMFA:              wm.ForceMFA,
		PasswordlessType:      wm.PasswordlessType,
	}
}

func writeModelToLabelPolicy(wm *LabelPolicyWriteModel) *domain.LabelPolicy {
	return &domain.LabelPolicy{
		ObjectRoot:          writeModelToObjectRoot(wm.WriteModel),
		PrimaryColor:        wm.PrimaryColor,
		BackgroundColor:     wm.BackgroundColor,
		WarnColor:           wm.WarnColor,
		FontColor:           wm.FontColor,
		PrimaryColorDark:    wm.PrimaryColorDark,
		BackgroundColorDark: wm.BackgroundColorDark,
		WarnColorDark:       wm.WarnColorDark,
		FontColorDark:       wm.FontColorDark,
		HideLoginNameSuffix: wm.HideLoginNameSuffix,
		ErrorMsgPopup:       wm.ErrorMsgPopup,
		DisableWatermark:    wm.DisableWatermark,
	}
}

func writeModelToMailTemplate(wm *MailTemplateWriteModel) *domain.MailTemplate {
	return &domain.MailTemplate{
		ObjectRoot: writeModelToObjectRoot(wm.WriteModel),
		Template:   wm.Template,
	}
}

func writeModelToOrgIAMPolicy(wm *IAMOrgIAMPolicyWriteModel) *domain.OrgIAMPolicy {
	return &domain.OrgIAMPolicy{
		ObjectRoot:            writeModelToObjectRoot(wm.PolicyOrgIAMWriteModel.WriteModel),
		UserLoginMustBeDomain: wm.UserLoginMustBeDomain,
	}
}

func writeModelToMailTemplatePolicy(wm *MailTemplateWriteModel) *domain.MailTemplate {
	return &domain.MailTemplate{
		ObjectRoot: writeModelToObjectRoot(wm.WriteModel),
		Template:   wm.Template,
	}
}

func writeModelToCustomText(wm *CustomTextWriteModel) *domain.CustomText {
	return &domain.CustomText{
		ObjectRoot: writeModelToObjectRoot(wm.WriteModel),
		State:      wm.State,
		Key:        wm.Key,
		Language:   wm.Language,
		Text:       wm.Text,
	}
}

func writeModelToPasswordAgePolicy(wm *PasswordAgePolicyWriteModel) *domain.PasswordAgePolicy {
	return &domain.PasswordAgePolicy{
		ObjectRoot:     writeModelToObjectRoot(wm.WriteModel),
		MaxAgeDays:     wm.MaxAgeDays,
		ExpireWarnDays: wm.ExpireWarnDays,
	}
}

func writeModelToPasswordComplexityPolicy(wm *PasswordComplexityPolicyWriteModel) *domain.PasswordComplexityPolicy {
	return &domain.PasswordComplexityPolicy{
		ObjectRoot:   writeModelToObjectRoot(wm.WriteModel),
		MinLength:    wm.MinLength,
		HasLowercase: wm.HasLowercase,
		HasUppercase: wm.HasUppercase,
		HasNumber:    wm.HasNumber,
		HasSymbol:    wm.HasSymbol,
	}
}

func writeModelToPasswordLockoutPolicy(wm *PasswordLockoutPolicyWriteModel) *domain.PasswordLockoutPolicy {
	return &domain.PasswordLockoutPolicy{
		ObjectRoot:          writeModelToObjectRoot(wm.WriteModel),
		MaxAttempts:         wm.MaxAttempts,
		ShowLockOutFailures: wm.ShowLockOutFailures,
	}
}

func writeModelToPrivacyPolicy(wm *PrivacyPolicyWriteModel) *domain.PrivacyPolicy {
	return &domain.PrivacyPolicy{
		ObjectRoot:  writeModelToObjectRoot(wm.WriteModel),
		TOSLink:     wm.TOSLink,
		PrivacyLink: wm.PrivacyLink,
	}
}

func writeModelToIDPConfig(wm *IDPConfigWriteModel) domain.IDPConfig {
	return &domain.CommonIDPConfig{
		ObjectRoot:  writeModelToObjectRoot(wm.WriteModel),
		IDPConfigID: wm.ConfigID,
		Name:        wm.Name,
		State:       wm.State,
		StylingType: wm.StylingType,
	}
}

func writeModelToIDPOIDCConfig(wm *OIDCConfigWriteModel) *domain.OIDCIDPConfig {
	return &domain.OIDCIDPConfig{
		ObjectRoot: writeModelToObjectRoot(wm.WriteModel),
		CommonIDPConfig: domain.CommonIDPConfig{
			IDPConfigID: wm.IDPConfigID,
			State:       wm.State,
		},
		ClientID:              wm.ClientID,
		IDPDisplayNameMapping: wm.IDPDisplayNameMapping,
		Issuer:                wm.Issuer,
		AuthorizationEndpoint: wm.AuthorizationEndpoint,
		TokenEndpoint:         wm.TokenEndpoint,
		Scopes:                wm.Scopes,
		UsernameMapping:       wm.UserNameMapping,
	}
}

func writeModelToIDPProvider(wm *IdentityProviderWriteModel) *domain.IDPProvider {
	return &domain.IDPProvider{
		ObjectRoot:  writeModelToObjectRoot(wm.WriteModel),
		IDPConfigID: wm.IDPConfigID,
		Type:        wm.IDPProviderType,
	}
}

func writeModelToFeatures(wm *FeaturesWriteModel) *domain.Features {
	return &domain.Features{
		ObjectRoot:               writeModelToObjectRoot(wm.WriteModel),
		TierName:                 wm.TierName,
		TierDescription:          wm.TierDescription,
		State:                    wm.State,
		StateDescription:         wm.StateDescription,
		AuditLogRetention:        wm.AuditLogRetention,
		LoginPolicyFactors:       wm.LoginPolicyFactors,
		LoginPolicyIDP:           wm.LoginPolicyIDP,
		LoginPolicyPasswordless:  wm.LoginPolicyPasswordless,
		LoginPolicyRegistration:  wm.LoginPolicyRegistration,
		LoginPolicyUsernameLogin: wm.LoginPolicyUsernameLogin,
		PasswordComplexityPolicy: wm.PasswordComplexityPolicy,
		LabelPolicyPrivateLabel:  wm.LabelPolicyPrivateLabel,
		LabelPolicyWatermark:     wm.LabelPolicyWatermark,
		CustomDomain:             wm.CustomDomain,
	}
}
