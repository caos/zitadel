package zitadel

import (
	"fmt"

	"github.com/caos/orbos/pkg/kubernetes/k8s"
	"github.com/caos/orbos/pkg/tree"
	"github.com/caos/zitadel/operator/zitadel/kinds/iam/zitadel/configuration"
	"github.com/pkg/errors"
	corev1 "k8s.io/api/core/v1"
)

type DesiredV0 struct {
	Common *tree.Common `yaml:",inline"`
	Spec   *Spec
}

type Spec struct {
	Verbose       bool
	Force         bool
	ReplicaCount  int                          `yaml:"replicaCount,omitempty"`
	Configuration *configuration.Configuration `yaml:"configuration"`
	NodeSelector  map[string]string            `yaml:"nodeSelector,omitempty"`
	Tolerations   []corev1.Toleration          `yaml:"tolerations,omitempty"`
	Affinity      *k8s.Affinity                `yaml:"affinity,omitempty"`
	Resources     *k8s.Resources               `yaml:"resources,omitempty"`
}

func (s *Spec) validate() (err error) {
	defer func() {
		if err != nil {
			err = fmt.Errorf("validating spec failed: %w", err)
		}
	}()

	return s.Configuration.Validate()
}

func parseDesiredV0(desiredTree *tree.Tree) (*DesiredV0, error) {
	desiredKind := &DesiredV0{
		Common: desiredTree.Common,
		Spec:   &Spec{},
	}

	if err := desiredTree.Original.Decode(desiredKind); err != nil {
		return nil, errors.Wrap(err, "parsing desired state failed")
	}

	return desiredKind, nil
}
