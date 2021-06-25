package cmds

import (
	"fmt"
	"github.com/caos/orbos/pkg/kubernetes/cli"
	"sort"

	"github.com/caos/zitadel/pkg/databases"
	"github.com/spf13/cobra"
)

func BackupListCommand(getRv GetRootValues) *cobra.Command {
	var (
		cmd = &cobra.Command{
			Use:   "backuplist",
			Short: "Get a list of all backups",
			Long:  "Get a list of all backups",
		}
	)

	cmd.RunE = func(cmd *cobra.Command, args []string) error {
		rv, err := getRv()
		if err != nil {
			return err
		}
		defer func() {
			err = rv.ErrFunc(err)
		}()

		monitor := rv.Monitor
		orbConfig := rv.OrbConfig
		gitClient := rv.GitClient

		backups := make([]string, 0)
		k8sClient, err := cli.Client(monitor, orbConfig, rv.GitClient, rv.Kubeconfig, rv.Gitops, true)
		if err != nil {
			return err
		}

		if rv.Gitops {
			backupsT, err := databases.GitOpsListBackups(monitor, gitClient, k8sClient)
			if err != nil {
				monitor.Error(err)
				return nil
			}
			backups = backupsT
		} else {
			backupsT, err := databases.CrdListBackups(monitor, k8sClient)
			if err != nil {
				monitor.Error(err)
				return nil
			}
			backups = backupsT
		}

		sort.Slice(backups, func(i, j int) bool {
			return backups[i] > backups[j]
		})
		for _, backup := range backups {
			fmt.Println(backup)
		}
		return nil
	}
	return cmd
}
