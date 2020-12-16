package handler

import (
	"time"

	"github.com/caos/zitadel/internal/config/systemdefaults"
	"github.com/caos/zitadel/internal/config/types"
	"github.com/caos/zitadel/internal/eventstore"
	"github.com/caos/zitadel/internal/eventstore/query"
	iam_event "github.com/caos/zitadel/internal/iam/repository/eventsourcing"
	"github.com/caos/zitadel/internal/management/repository/eventsourcing/view"
	org_event "github.com/caos/zitadel/internal/org/repository/eventsourcing"
	proj_event "github.com/caos/zitadel/internal/project/repository/eventsourcing"
	usr_event "github.com/caos/zitadel/internal/user/repository/eventsourcing"
)

type Configs map[string]*Config

type Config struct {
	MinimumCycleDuration types.Duration
}

type handler struct {
	view                *view.View
	bulkLimit           uint64
	cycleDuration       time.Duration
	errorCountUntilSkip uint64

	es eventstore.Eventstore
}

func (h *handler) Eventstore() eventstore.Eventstore {
	return h.es
}

type EventstoreRepos struct {
	ProjectEvents *proj_event.ProjectEventstore
	UserEvents    *usr_event.UserEventstore
	OrgEvents     *org_event.OrgEventstore
	IamEvents     *iam_event.IAMEventstore
}

func Register(configs Configs, bulkLimit, errorCount uint64, view *view.View, es eventstore.Eventstore, repos EventstoreRepos, defaults systemdefaults.SystemDefaults) []query.Handler {
	return []query.Handler{
		&Project{handler: handler{view, bulkLimit, configs.cycleDuration("Project"), errorCount, es},
			eventstore: es},
		&ProjectGrant{handler: handler{view, bulkLimit, configs.cycleDuration("ProjectGrant"), errorCount, es},
			eventstore: es, projectEvents: repos.ProjectEvents, orgEvents: repos.OrgEvents},
		&ProjectRole{handler: handler{view, bulkLimit, configs.cycleDuration("ProjectRole"), errorCount, es},
			projectEvents: repos.ProjectEvents},
		&ProjectMember{handler: handler{view, bulkLimit, configs.cycleDuration("ProjectMember"), errorCount, es},
			userEvents: repos.UserEvents},
		&ProjectGrantMember{handler: handler{view, bulkLimit, configs.cycleDuration("ProjectGrantMember"), errorCount, es},
			userEvents: repos.UserEvents},
		&Application{handler: handler{view, bulkLimit, configs.cycleDuration("Application"), errorCount, es},
			projectEvents: repos.ProjectEvents},
		&User{handler: handler{view, bulkLimit, configs.cycleDuration("User"), errorCount, es},
			eventstore: es, orgEvents: repos.OrgEvents, iamEvents: repos.IamEvents, iamID: defaults.IamID},
		&UserGrant{handler: handler{view, bulkLimit, configs.cycleDuration("UserGrant"), errorCount, es},
			projectEvents: repos.ProjectEvents, userEvents: repos.UserEvents, orgEvents: repos.OrgEvents},
		&Org{handler: handler{view, bulkLimit, configs.cycleDuration("Org"), errorCount, es}},
		&OrgMember{handler: handler{view, bulkLimit, configs.cycleDuration("OrgMember"), errorCount, es},
			userEvents: repos.UserEvents},
		&OrgDomain{handler: handler{view, bulkLimit, configs.cycleDuration("OrgDomain"), errorCount, es}},
		&UserMembership{handler: handler{view, bulkLimit, configs.cycleDuration("UserMembership"), errorCount, es},
			orgEvents: repos.OrgEvents, projectEvents: repos.ProjectEvents},
		&MachineKeys{handler: handler{view, bulkLimit, configs.cycleDuration("MachineKeys"), errorCount, es}},
		&IDPConfig{handler: handler{view, bulkLimit, configs.cycleDuration("IDPConfig"), errorCount, es}},
		&LoginPolicy{handler: handler{view, bulkLimit, configs.cycleDuration("LoginPolicy"), errorCount, es}},
		&LabelPolicy{handler: handler{view, bulkLimit, configs.cycleDuration("LabelPolicy"), errorCount, es}},
		&IDPProvider{handler: handler{view, bulkLimit, configs.cycleDuration("IDPProvider"), errorCount, es},
			systemDefaults: defaults, iamEvents: repos.IamEvents, orgEvents: repos.OrgEvents},
		&ExternalIDP{handler: handler{view, bulkLimit, configs.cycleDuration("ExternalIDP"), errorCount, es},
			systemDefaults: defaults, iamEvents: repos.IamEvents, orgEvents: repos.OrgEvents},
		&PasswordComplexityPolicy{handler: handler{view, bulkLimit, configs.cycleDuration("PasswordComplexityPolicy"), errorCount, es}},
		&PasswordAgePolicy{handler: handler{view, bulkLimit, configs.cycleDuration("PasswordAgePolicy"), errorCount, es}},
		&PasswordLockoutPolicy{handler: handler{view, bulkLimit, configs.cycleDuration("PasswordLockoutPolicy"), errorCount, es}},
		&OrgIAMPolicy{handler: handler{view, bulkLimit, configs.cycleDuration("OrgIAMPolicy"), errorCount, es}},
	}
}

func (configs Configs) cycleDuration(viewModel string) time.Duration {
	c, ok := configs[viewModel]
	if !ok {
		return 1 * time.Second
	}
	return c.MinimumCycleDuration.Duration
}

func (h *handler) MinimumCycleDuration() time.Duration {
	return h.cycleDuration
}

func (h *handler) QueryLimit() uint64 {
	return h.bulkLimit
}
