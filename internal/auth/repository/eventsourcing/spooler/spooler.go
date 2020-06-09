package spooler

import (
	"database/sql"
	sd "github.com/caos/zitadel/internal/config/systemdefaults"

	"github.com/caos/zitadel/internal/auth/repository/eventsourcing/handler"
	"github.com/caos/zitadel/internal/auth/repository/eventsourcing/view"

	"github.com/caos/zitadel/internal/eventstore"
	"github.com/caos/zitadel/internal/eventstore/spooler"
)

type SpoolerConfig struct {
	BulkLimit             uint64
	FailureCountUntilSkip uint64
	ConcurrentTasks       int
	Handlers              handler.Configs
}

func StartSpooler(c SpoolerConfig, es eventstore.Eventstore, view *view.View, sql *sql.DB, repos handler.EventstoreRepos, systemDefaults sd.SystemDefaults) *spooler.Spooler {
	spoolerConfig := spooler.Config{
		Eventstore:      es,
		Locker:          &locker{dbClient: sql},
		ConcurrentTasks: c.ConcurrentTasks,
		ViewHandlers:    handler.Register(c.Handlers, c.BulkLimit, c.FailureCountUntilSkip, view, es, repos, systemDefaults),
	}
	spool := spoolerConfig.New()
	spool.Start()
	return spool
}
