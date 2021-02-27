package configuration

import (
	kubernetesmock "github.com/caos/orbos/pkg/kubernetes/mock"
	"github.com/caos/orbos/pkg/secret"
	"github.com/caos/zitadel/operator/zitadel/kinds/iam/zitadel/database"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	corev1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	"testing"
)

var (
	desiredEmpty = &Configuration{
		Tracing: &Tracing{
			ServiceAccountJSON: &secret.Secret{Value: ""},
			ProjectID:          "",
			Fraction:           "",
			Type:               "",
		},
		Secrets: &Secrets{
			Keys:                    &secret.Secret{Value: ""},
			UserVerificationID:      "",
			OTPVerificationID:       "",
			OIDCKeysID:              "",
			CookieID:                "",
			CSRFID:                  "",
			DomainVerificationID:    "",
			IDPConfigVerificationID: "",
		},
		Notifications: &Notifications{
			GoogleChatURL: &secret.Secret{Value: ""},
			Email: &Email{
				SMTPHost:      "",
				SMTPUser:      "",
				SenderAddress: "",
				SenderName:    "",
				TLS:           false,
				AppKey:        &secret.Secret{Value: ""},
			},
			Twilio: &Twilio{
				SenderName: "",
				AuthToken:  &secret.Secret{Value: ""},
				SID:        &secret.Secret{Value: ""},
			},
		},
		Passwords: &Passwords{
			Migration:    &secret.Secret{Value: ""},
			Management:   &secret.Secret{Value: ""},
			Auth:         &secret.Secret{Value: ""},
			Authz:        &secret.Secret{Value: ""},
			Adminapi:     &secret.Secret{Value: ""},
			Notification: &secret.Secret{Value: ""},
			Eventstore:   &secret.Secret{Value: ""},
		},
		DebugMode: false,
		LogLevel:  "info",
		Ingress: &Ingress{
			Domain:    "",
			TlsSecret: "",
			Subdomains: &Subdomains{
				Accounts: "",
				API:      "",
				Console:  "",
				Issuer:   "",
			},
		},
		ClusterDNS: "",
	}

	desiredFull = &Configuration{
		Tracing: &Tracing{
			ServiceAccountJSON: &secret.Secret{Value: "sajson"},
			ProjectID:          "projectid",
			Fraction:           "fraction",
			Type:               "type",
		},
		Secrets: &Secrets{
			Keys:                    &secret.Secret{Value: "keys"},
			UserVerificationID:      "userid",
			OTPVerificationID:       "otpid",
			OIDCKeysID:              "oidcid",
			CookieID:                "cookieid",
			CSRFID:                  "csrfid",
			DomainVerificationID:    "domainid",
			IDPConfigVerificationID: "idpid",
		},
		Notifications: &Notifications{
			GoogleChatURL: &secret.Secret{Value: "chat"},
			Email: &Email{
				SMTPHost:      "smtphost",
				SMTPUser:      "smtpuser",
				SenderAddress: "sender",
				SenderName:    "sendername",
				TLS:           true,
				AppKey:        &secret.Secret{Value: "appkey"},
			},
			Twilio: &Twilio{
				SenderName: "sendername",
				AuthToken:  &secret.Secret{Value: "authtoken"},
				SID:        &secret.Secret{Value: "sid"},
			},
		},
		Passwords: &Passwords{
			Migration:    &secret.Secret{Value: "migration"},
			Management:   &secret.Secret{Value: "management"},
			Auth:         &secret.Secret{Value: "auth"},
			Authz:        &secret.Secret{Value: "authz"},
			Adminapi:     &secret.Secret{Value: "adminapi"},
			Notification: &secret.Secret{Value: "notification"},
			Eventstore:   &secret.Secret{Value: "eventstore"},
		},
		DebugMode: true,
		LogLevel:  "debug",
		Ingress: &Ingress{
			Domain:    "domain",
			TlsSecret: "tls",
			Subdomains: &Subdomains{
				Accounts: "accounts",
				API:      "api",
				Console:  "console",
				Issuer:   "issuer",
			},
		},
		ClusterDNS: "cluster",
	}
)

func TestConfiguration_LiteralsConfigMap(t *testing.T) {
	certPath := "test"
	secretPath := "test"
	googleSA := "test"
	zitadelKeyPath := "test"
	users := map[string]string{
		"migration":    "migration",
		"management":   "management",
		"auth":         "auth",
		"authz":        "authz",
		"adminapi":     "adminapi",
		"notification": "notification",
		"eventstore":   "eventstore",
	}

	queried := map[string]interface{}{}
	database.SetDatabaseInQueried(queried, &database.Current{
		Host:  "test",
		Port:  "test",
		Users: []string{"test"},
	})

	equals := map[string]string{
		"ZITADEL_LOG_LEVEL":                   "info",
		"CR_NOTIFICATION_KEY":                 "test/client.notification.key",
		"CR_AUTHZ_KEY":                        "test/client.authz.key",
		"ZITADEL_OTP_VERIFICATION_KEY":        "",
		"ZITADEL_COOKIE_KEY":                  "",
		"SMTP_USER":                           "",
		"EMAIL_SENDER_NAME":                   "",
		"ZITADEL_COOKIE_DOMAIN":               ".",
		"ZITADEL_EVENTSTORE_HOST":             "test",
		"CR_ADMINAPI_CERT":                    "test/client.adminapi.crt",
		"ZITADEL_IDP_CONFIG_VERIFICATION_KEY": "",
		"ZITADEL_ACCOUNTS":                    "https://.",
		"ZITADEL_OAUTH":                       "https://./oauth/v2",
		"ZITADEL_EVENTSTORE_PORT":             "test",
		"SMTP_TLS":                            "FALSE",
		"CR_ROOT_CERT":                        "test/ca.crt",
		"CR_NOTIFICATION_CERT":                "test/client.notification.crt",
		"CR_EVENTSTORE_CERT":                  "test/client.eventstore.crt",
		"ZITADEL_USER_VERIFICATION_KEY":       "",
		"ZITADEL_DEFAULT_DOMAIN":              "",
		"CR_SSL_MODE":                         "require",
		"ZITADEL_KEY_PATH":                    "test/test",
		"CR_MANAGEMENT_CERT":                  "test/client.management.crt",
		"CR_AUTH_KEY":                         "test/client.auth.key",
		"CR_AUTHZ_CERT":                       "test/client.authz.crt",
		"CR_ADMINAPI_KEY":                     "test/client.adminapi.key",
		"ZITADEL_TRACING_PROJECT_ID":          "",
		"ZITADEL_DOMAIN_VERIFICATION_KEY":     "",
		"CR_EVENTSTORE_KEY":                   "test/client.eventstore.key",
		"ZITADEL_CSRF_KEY":                    "",
		"TWILIO_SENDER_NAME":                  "",
		"EMAIL_SENDER_ADDRESS":                "",
		"ZITADEL_ISSUER":                      "https://.",
		"ZITADEL_CONSOLE":                     "https://.",
		"ZITADEL_ACCOUNTS_DOMAIN":             ".",
		"GOOGLE_APPLICATION_CREDENTIALS":      "test/test",
		"CR_MIGRATION_KEY":                    "test/client.migration.key",
		"ZITADEL_TRACING_FRACTION":            "",
		"SMTP_HOST":                           "",
		"CAOS_OIDC_DEV":                       "true",
		"DEBUG_MODE":                          "false",
		"CR_AUTH_CERT":                        "test/client.auth.crt",
		"ZITADEL_OIDC_KEYS_ID":                "",
		"CR_MIGRATION_CERT":                   "test/client.migration.crt",
		"CR_MANAGEMENT_KEY":                   "test/client.management.key",
		"ZITADEL_TRACING_TYPE":                "",
		"ZITADEL_AUTHORIZE":                   "https://./oauth/v2",
	}

	literals := literalsConfigMap(desiredEmpty, users, certPath, secretPath, googleSA, zitadelKeyPath, queried)

	assert.Equal(t, equals, literals)
}

func TestConfiguration_LiteralsConfigMapFull(t *testing.T) {
	certPath := "test"
	secretPath := "test"
	googleSA := "test"
	zitadelKeyPath := "test"
	users := map[string]string{
		"migration":    "migration2",
		"management":   "management2",
		"auth":         "auth2",
		"authz":        "authz2",
		"adminapi":     "adminapi2",
		"notification": "notification2",
		"eventstore":   "eventstore2",
	}

	queried := map[string]interface{}{}
	database.SetDatabaseInQueried(queried, &database.Current{
		Host:  "test",
		Port:  "test",
		Users: []string{"test"},
	})

	equals := map[string]string{
		"CAOS_OIDC_DEV":                       "true",
		"CR_ADMINAPI_CERT":                    "test/client.adminapi.crt",
		"CR_ADMINAPI_KEY":                     "test/client.adminapi.key",
		"CR_AUTHZ_CERT":                       "test/client.authz.crt",
		"CR_AUTHZ_KEY":                        "test/client.authz.key",
		"CR_AUTH_CERT":                        "test/client.auth.crt",
		"CR_AUTH_KEY":                         "test/client.auth.key",
		"CR_EVENTSTORE_CERT":                  "test/client.eventstore.crt",
		"CR_EVENTSTORE_KEY":                   "test/client.eventstore.key",
		"CR_MANAGEMENT_CERT":                  "test/client.management.crt",
		"CR_MANAGEMENT_KEY":                   "test/client.management.key",
		"CR_MIGRATION_CERT":                   "test/client.migration.crt",
		"CR_MIGRATION_KEY":                    "test/client.migration.key",
		"CR_NOTIFICATION_CERT":                "test/client.notification.crt",
		"CR_NOTIFICATION_KEY":                 "test/client.notification.key",
		"CR_ROOT_CERT":                        "test/ca.crt",
		"CR_SSL_MODE":                         "require",
		"DEBUG_MODE":                          "true",
		"EMAIL_SENDER_ADDRESS":                "sender",
		"EMAIL_SENDER_NAME":                   "sendername",
		"GOOGLE_APPLICATION_CREDENTIALS":      "test/test",
		"SMTP_HOST":                           "smtphost",
		"SMTP_TLS":                            "TRUE",
		"SMTP_USER":                           "smtpuser",
		"TWILIO_SENDER_NAME":                  "sendername",
		"ZITADEL_ACCOUNTS":                    "https://accounts.domain",
		"ZITADEL_ACCOUNTS_DOMAIN":             "accounts.domain",
		"ZITADEL_AUTHORIZE":                   "https://accounts.domain/oauth/v2",
		"ZITADEL_CONSOLE":                     "https://console.domain",
		"ZITADEL_COOKIE_DOMAIN":               "accounts.domain",
		"ZITADEL_COOKIE_KEY":                  "cookieid",
		"ZITADEL_CSRF_KEY":                    "csrfid",
		"ZITADEL_DEFAULT_DOMAIN":              "domain",
		"ZITADEL_DOMAIN_VERIFICATION_KEY":     "domainid",
		"ZITADEL_EVENTSTORE_HOST":             "test",
		"ZITADEL_EVENTSTORE_PORT":             "test",
		"ZITADEL_IDP_CONFIG_VERIFICATION_KEY": "idpid",
		"ZITADEL_ISSUER":                      "https://issuer.domain",
		"ZITADEL_KEY_PATH":                    "test/test",
		"ZITADEL_LOG_LEVEL":                   "debug",
		"ZITADEL_OAUTH":                       "https://api.domain/oauth/v2",
		"ZITADEL_OIDC_KEYS_ID":                "oidcid",
		"ZITADEL_OTP_VERIFICATION_KEY":        "otpid",
		"ZITADEL_TRACING_FRACTION":            "fraction",
		"ZITADEL_TRACING_PROJECT_ID":          "projectid",
		"ZITADEL_TRACING_TYPE":                "type",
		"ZITADEL_USER_VERIFICATION_KEY":       "userid",
	}
	literals := literalsConfigMap(desiredFull, users, certPath, secretPath, googleSA, zitadelKeyPath, queried)

	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsSecrets(t *testing.T) {
	googleSA := "sajson"
	zitadelKeyPath := "zitadel"

	equals := map[string]string{
		googleSA:       "",
		zitadelKeyPath: "",
	}

	literals := literalsSecret(desiredEmpty, googleSA, zitadelKeyPath)
	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsSecretsFull(t *testing.T) {
	googleSA := "sajson"
	zitadelKeyPath := "zitadel"

	equals := map[string]string{
		googleSA:       "sajson",
		zitadelKeyPath: "keys",
	}

	literals := literalsSecret(desiredFull, googleSA, zitadelKeyPath)
	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsSecretVars(t *testing.T) {
	equals := map[string]string{
		"ZITADEL_EMAILAPPKEY":       "",
		"ZITADEL_GOOGLE_CHAT_URL":   "",
		"ZITADEL_TWILIO_AUTH_TOKEN": "",
		"ZITADEL_TWILIO_SID":        "",
	}
	literals := literalsSecretVars(desiredEmpty)

	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsSecretVarsFull(t *testing.T) {
	equals := map[string]string{
		"ZITADEL_EMAILAPPKEY":       "appkey",
		"ZITADEL_GOOGLE_CHAT_URL":   "chat",
		"ZITADEL_TWILIO_AUTH_TOKEN": "authtoken",
		"ZITADEL_TWILIO_SID":        "sid",
	}
	literals := literalsSecretVars(desiredFull)

	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsConsoleCM(t *testing.T) {
	k8sClient := kubernetesmock.NewMockClientInt(gomock.NewController(t))
	clientID := ""
	namespace := "test"
	cmName := "cm"

	cm := &corev1.ConfigMap{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: namespace,
			Name:      cmName,
		},
		Data: map[string]string{"environment.json": "{\"authServiceUrl\":\"https://.\",\"mgmtServiceUrl\":\"https://.\",\"issuer\":\"https://.\",\"clientid\":\"\"}"},
	}

	equals := map[string]string{"environment.json": "{\"authServiceUrl\":\"https://.\",\"mgmtServiceUrl\":\"https://.\",\"issuer\":\"https://.\",\"clientid\":\"\"}"}
	k8sClient.EXPECT().GetConfigMap(namespace, cmName).Times(1).Return(cm, nil)

	literals := literalsConsoleCM(clientID, desiredEmpty.Ingress, k8sClient, namespace, cmName)
	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsConsoleCMFull(t *testing.T) {
	k8sClient := kubernetesmock.NewMockClientInt(gomock.NewController(t))
	clientID := "test"
	namespace := "test"
	cmName := "cm"

	cm := &corev1.ConfigMap{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: namespace,
			Name:      cmName,
		},
		Data: map[string]string{},
	}

	equals := map[string]string{
		"environment.json": "{\"authServiceUrl\":\"https://api.domain\",\"mgmtServiceUrl\":\"https://api.domain\",\"issuer\":\"https://issuer.domain\",\"clientid\":\"test\"}",
	}
	k8sClient.EXPECT().GetConfigMap(namespace, cmName).Times(1).Return(cm, nil)

	literals := literalsConsoleCM(clientID, desiredFull.Ingress, k8sClient, namespace, cmName)
	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsConsoleCMWithCM(t *testing.T) {
	k8sClient := kubernetesmock.NewMockClientInt(gomock.NewController(t))
	clientID := "test"
	namespace := "test"
	cmName := "cm"

	cm := &corev1.ConfigMap{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: namespace,
			Name:      cmName,
		},
		Data: map[string]string{
			"environment.json": "{\"authServiceUrl\":\"https://api.domain\",\"mgmtServiceUrl\":\"https://api.domain\",\"issuer\":\"https://issuer.domain\",\"clientid\":\"\"}",
		},
	}

	equals := map[string]string{
		"environment.json": "{\"authServiceUrl\":\"https://api.domain\",\"mgmtServiceUrl\":\"https://api.domain\",\"issuer\":\"https://issuer.domain\",\"clientid\":\"test\"}",
	}
	k8sClient.EXPECT().GetConfigMap(namespace, cmName).Times(1).Return(cm, nil)

	literals := literalsConsoleCM(clientID, desiredFull.Ingress, k8sClient, namespace, cmName)
	assert.EqualValues(t, equals, literals)
}

func TestConfiguration_LiteralsConsoleCMWithCMFull(t *testing.T) {
	k8sClient := kubernetesmock.NewMockClientInt(gomock.NewController(t))
	clientID := ""
	namespace := "test"
	cmName := "cm"

	cm := &corev1.ConfigMap{
		ObjectMeta: metav1.ObjectMeta{
			Namespace: namespace,
			Name:      cmName,
		},
		Data: map[string]string{
			"environment.json": "{\"authServiceUrl\":\"https://api.domain\",\"mgmtServiceUrl\":\"https://api.domain\",\"issuer\":\"https://issuer.domain\",\"clientid\":\"test\"}",
		},
	}

	equals := map[string]string{
		"environment.json": "{\"authServiceUrl\":\"https://api.domain\",\"mgmtServiceUrl\":\"https://api.domain\",\"issuer\":\"https://issuer.domain\",\"clientid\":\"test\"}",
	}
	k8sClient.EXPECT().GetConfigMap(namespace, cmName).Times(1).Return(cm, nil)

	literals := literalsConsoleCM(clientID, desiredFull.Ingress, k8sClient, namespace, cmName)
	assert.EqualValues(t, equals, literals)
}
