package restore

import (
	"time"

	"github.com/caos/zitadel/operator"

	"github.com/caos/orbos/mntr"
	"github.com/caos/orbos/pkg/kubernetes"
	"github.com/caos/orbos/pkg/kubernetes/resources/job"
	"github.com/caos/orbos/pkg/labels"
	corev1 "k8s.io/api/core/v1"
)

const (
	Instant             = "restore"
	defaultMode         = int32(256)
	certPath            = "/cockroach/cockroach-certs"
	accessKeyIDPath     = "/secrets/accessaccountkey"
	secretAccessKeyPath = "/secrets/secretaccesskey"
	sessionTokenPath    = "/secrets/sessiontoken"
	jobPrefix           = "backup-"
	jobSuffix           = "-restore"
	image               = "cockroachdb/cockroach"
	internalSecretName  = "client-certs"
	rootSecretName      = "cockroachdb.client.root"
	timeout             = 15 * time.Minute
	saJsonBase64Env     = "SAJSON"
)

func AdaptFunc(
	monitor mntr.Monitor,
	backupName string,
	namespace string,
	componentLabels *labels.Component,
	bucketName string,
	timestamp string,
	accessKeyIDName string,
	accessKeyIDKey string,
	secretAccessKeyName string,
	secretAccessKeyKey string,
	sessionTokenName string,
	sessionTokenKey string,
	region string,
	endpoint string,
	nodeselector map[string]string,
	tolerations []corev1.Toleration,
	checkDBReady operator.EnsureFunc,
	dbURL string,
	dbPort int32,
	version string,
) (
	queryFunc operator.QueryFunc,
	destroyFunc operator.DestroyFunc,
	err error,
) {

	jobName := jobPrefix + backupName + jobSuffix
	command := getCommand(
		timestamp,
		bucketName,
		backupName,
		certPath,
		accessKeyIDPath,
		secretAccessKeyPath,
		sessionTokenPath,
		region,
		endpoint,
		dbURL,
		dbPort,
	)

	jobdef := getJob(
		namespace,
		labels.MustForName(componentLabels, GetJobName(backupName)),
		nodeselector,
		tolerations,
		accessKeyIDName,
		accessKeyIDKey,
		secretAccessKeyName,
		secretAccessKeyKey,
		sessionTokenName,
		sessionTokenKey,
		version,
		command,
	)

	destroyJ, err := job.AdaptFuncToDestroy(jobName, namespace)
	if err != nil {
		return nil, nil, err
	}

	destroyers := []operator.DestroyFunc{
		operator.ResourceDestroyToZitadelDestroy(destroyJ),
	}

	queryJ, err := job.AdaptFuncToEnsure(jobdef)
	if err != nil {
		return nil, nil, err
	}

	queriers := []operator.QueryFunc{
		operator.EnsureFuncToQueryFunc(checkDBReady),
		operator.ResourceQueryToZitadelQuery(queryJ),
	}

	return func(k8sClient kubernetes.ClientInt, queried map[string]interface{}) (operator.EnsureFunc, error) {
			return operator.QueriersToEnsureFunc(monitor, false, queriers, k8sClient, queried)
		},
		operator.DestroyersToDestroyFunc(monitor, destroyers),

		nil
}

func GetJobName(backupName string) string {
	return jobPrefix + backupName + jobSuffix
}
