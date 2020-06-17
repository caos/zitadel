package eventstore

import (
	"context"
	caos_errors "github.com/caos/zitadel/internal/errors"
	es_int "github.com/caos/zitadel/internal/eventstore"
	usr_grant_event "github.com/caos/zitadel/internal/usergrant/repository/eventsourcing"
	"strings"

	"github.com/caos/zitadel/internal/api/auth"
	global_model "github.com/caos/zitadel/internal/model"

	"github.com/caos/zitadel/internal/management/repository/eventsourcing/view"
	"github.com/caos/zitadel/internal/project/repository/view/model"

	proj_model "github.com/caos/zitadel/internal/project/model"
	proj_event "github.com/caos/zitadel/internal/project/repository/eventsourcing"
)

type ProjectRepo struct {
	es_int.Eventstore
	SearchLimit     uint64
	ProjectEvents   *proj_event.ProjectEventstore
	UserGrantEvents *usr_grant_event.UserGrantEventStore
	View            *view.View
	Roles           []string
}

func (repo *ProjectRepo) ProjectByID(ctx context.Context, id string) (project *proj_model.Project, err error) {
	return repo.ProjectEvents.ProjectByID(ctx, id)
}

func (repo *ProjectRepo) CreateProject(ctx context.Context, name string) (*proj_model.Project, error) {
	project := &proj_model.Project{Name: name}
	return repo.ProjectEvents.CreateProject(ctx, project)
}

func (repo *ProjectRepo) UpdateProject(ctx context.Context, project *proj_model.Project) (*proj_model.Project, error) {
	return repo.ProjectEvents.UpdateProject(ctx, project)
}

func (repo *ProjectRepo) DeactivateProject(ctx context.Context, id string) (*proj_model.Project, error) {
	return repo.ProjectEvents.DeactivateProject(ctx, id)
}

func (repo *ProjectRepo) ReactivateProject(ctx context.Context, id string) (*proj_model.Project, error) {
	return repo.ProjectEvents.ReactivateProject(ctx, id)
}

func (repo *ProjectRepo) SearchProjects(ctx context.Context, request *proj_model.ProjectViewSearchRequest) (*proj_model.ProjectViewSearchResponse, error) {
	request.EnsureLimit(repo.SearchLimit)

	permissions := auth.GetPermissionsFromCtx(ctx)
	if !auth.HasGlobalPermission(permissions) {
		ids := auth.GetPermissionCtxIDs(permissions)
		request.Queries = append(request.Queries, &proj_model.ProjectViewSearchQuery{Key: proj_model.PROJECTSEARCHKEY_PROJECTID, Method: global_model.SEARCHMETHOD_IS_ONE_OF, Value: ids})
	}

	projects, count, err := repo.View.SearchProjects(request)
	if err != nil {
		return nil, err
	}
	return &proj_model.ProjectViewSearchResponse{
		Offset:      request.Offset,
		Limit:       request.Limit,
		TotalResult: uint64(count),
		Result:      model.ProjectsToModel(projects),
	}, nil
}

func (repo *ProjectRepo) ProjectGrantViewByID(ctx context.Context, grantID string) (project *proj_model.ProjectGrantView, err error) {
	p, err := repo.View.ProjectGrantByID(grantID)
	if err != nil {
		return nil, err
	}
	return model.ProjectGrantToModel(p), nil
}

func (repo *ProjectRepo) ProjectMemberByID(ctx context.Context, projectID, userID string) (member *proj_model.ProjectMember, err error) {
	member = proj_model.NewProjectMember(projectID, userID)
	return repo.ProjectEvents.ProjectMemberByIDs(ctx, member)
}

func (repo *ProjectRepo) AddProjectMember(ctx context.Context, member *proj_model.ProjectMember) (*proj_model.ProjectMember, error) {
	return repo.ProjectEvents.AddProjectMember(ctx, member)
}

func (repo *ProjectRepo) ChangeProjectMember(ctx context.Context, member *proj_model.ProjectMember) (*proj_model.ProjectMember, error) {
	return repo.ProjectEvents.ChangeProjectMember(ctx, member)
}

func (repo *ProjectRepo) RemoveProjectMember(ctx context.Context, projectID, userID string) error {
	member := proj_model.NewProjectMember(projectID, userID)
	return repo.ProjectEvents.RemoveProjectMember(ctx, member)
}

func (repo *ProjectRepo) SearchProjectMembers(ctx context.Context, request *proj_model.ProjectMemberSearchRequest) (*proj_model.ProjectMemberSearchResponse, error) {
	request.EnsureLimit(repo.SearchLimit)
	members, count, err := repo.View.SearchProjectMembers(request)
	if err != nil {
		return nil, err
	}
	return &proj_model.ProjectMemberSearchResponse{
		Offset:      request.Offset,
		Limit:       request.Limit,
		TotalResult: uint64(count),
		Result:      model.ProjectMembersToModel(members),
	}, nil
}

func (repo *ProjectRepo) AddProjectRole(ctx context.Context, member *proj_model.ProjectRole) (*proj_model.ProjectRole, error) {
	return repo.ProjectEvents.AddProjectRole(ctx, member)
}

func (repo *ProjectRepo) ChangeProjectRole(ctx context.Context, member *proj_model.ProjectRole) (*proj_model.ProjectRole, error) {
	return repo.ProjectEvents.ChangeProjectRole(ctx, member)
}

func (repo *ProjectRepo) RemoveProjectRole(ctx context.Context, projectID, key string) error {
	userGrants, err := repo.View.UserGrantsByProjectIDAndRoleKey(projectID, key)
	if err != nil {
		return err
	}
	if len(userGrants) > 0 {
		return caos_errors.ThrowPreconditionFailed(nil, "MGMT-PS0kc", "Remove role not possible, usergrants with this role still exist")
	}
	projectGrants, err := repo.View.ProjectGrantsByProjectIDAndRoleKey(projectID, key)
	if err != nil {
		return err
	}
	if len(projectGrants) > 0 {
		return caos_errors.ThrowPreconditionFailed(nil, "MGMT-Ls08e", "Remove role not possible, projectgrants with this role still exist")
	}
	return repo.ProjectEvents.RemoveProjectRole(ctx, proj_model.NewProjectRole(projectID, key))
}

func (repo *ProjectRepo) SearchProjectRoles(ctx context.Context, request *proj_model.ProjectRoleSearchRequest) (*proj_model.ProjectRoleSearchResponse, error) {
	request.EnsureLimit(repo.SearchLimit)
	roles, count, err := repo.View.SearchProjectRoles(request)
	if err != nil {
		return nil, err
	}
	return &proj_model.ProjectRoleSearchResponse{
		Offset:      request.Offset,
		Limit:       request.Limit,
		TotalResult: uint64(count),
		Result:      model.ProjectRolesToModel(roles),
	}, nil
}

func (repo *ProjectRepo) ProjectChanges(ctx context.Context, id string, lastSequence uint64, limit uint64) (*proj_model.ProjectChanges, error) {
	changes, err := repo.ProjectEvents.ProjectChanges(ctx, id, lastSequence, limit)
	if err != nil {
		return nil, err
	}
	return changes, nil
}

func (repo *ProjectRepo) ApplicationByID(ctx context.Context, projectID, appID string) (app *proj_model.Application, err error) {
	return repo.ProjectEvents.ApplicationByIDs(ctx, projectID, appID)
}

func (repo *ProjectRepo) AddApplication(ctx context.Context, app *proj_model.Application) (*proj_model.Application, error) {
	return repo.ProjectEvents.AddApplication(ctx, app)
}

func (repo *ProjectRepo) ChangeApplication(ctx context.Context, app *proj_model.Application) (*proj_model.Application, error) {
	return repo.ProjectEvents.ChangeApplication(ctx, app)
}

func (repo *ProjectRepo) DeactivateApplication(ctx context.Context, projectID, appID string) (*proj_model.Application, error) {
	return repo.ProjectEvents.DeactivateApplication(ctx, projectID, appID)
}

func (repo *ProjectRepo) ReactivateApplication(ctx context.Context, projectID, appID string) (*proj_model.Application, error) {
	return repo.ProjectEvents.ReactivateApplication(ctx, projectID, appID)
}

func (repo *ProjectRepo) RemoveApplication(ctx context.Context, projectID, appID string) error {
	app := proj_model.NewApplication(projectID, appID)
	return repo.ProjectEvents.RemoveApplication(ctx, app)
}

func (repo *ProjectRepo) SearchApplications(ctx context.Context, request *proj_model.ApplicationSearchRequest) (*proj_model.ApplicationSearchResponse, error) {
	request.EnsureLimit(repo.SearchLimit)
	apps, count, err := repo.View.SearchApplications(request)
	if err != nil {
		return nil, err
	}
	return &proj_model.ApplicationSearchResponse{
		Offset:      request.Offset,
		Limit:       request.Limit,
		TotalResult: uint64(count),
		Result:      model.ApplicationViewsToModel(apps),
	}, nil
}

func (repo *ProjectRepo) ApplicationChanges(ctx context.Context, id string, appId string, lastSequence uint64, limit uint64) (*proj_model.ApplicationChanges, error) {
	changes, err := repo.ProjectEvents.ApplicationChanges(ctx, id, appId, lastSequence, limit)
	if err != nil {
		return nil, err
	}
	return changes, nil
}

func (repo *ProjectRepo) ChangeOIDCConfig(ctx context.Context, config *proj_model.OIDCConfig) (*proj_model.OIDCConfig, error) {
	return repo.ProjectEvents.ChangeOIDCConfig(ctx, config)
}

func (repo *ProjectRepo) ChangeOIDConfigSecret(ctx context.Context, projectID, appID string) (*proj_model.OIDCConfig, error) {
	return repo.ProjectEvents.ChangeOIDCConfigSecret(ctx, projectID, appID)
}

func (repo *ProjectRepo) ProjectGrantByID(ctx context.Context, projectID, appID string) (app *proj_model.ProjectGrant, err error) {
	return repo.ProjectEvents.ProjectGrantByIDs(ctx, projectID, appID)
}

func (repo *ProjectRepo) SearchProjectGrants(ctx context.Context, request *proj_model.ProjectGrantViewSearchRequest) (*proj_model.ProjectGrantViewSearchResponse, error) {
	request.EnsureLimit(repo.SearchLimit)
	projects, count, err := repo.View.SearchProjectGrants(request)
	if err != nil {
		return nil, err
	}
	return &proj_model.ProjectGrantViewSearchResponse{
		Offset:      request.Offset,
		Limit:       request.Limit,
		TotalResult: uint64(count),
		Result:      model.ProjectGrantsToModel(projects),
	}, nil
}

func (repo *ProjectRepo) AddProjectGrant(ctx context.Context, app *proj_model.ProjectGrant) (*proj_model.ProjectGrant, error) {
	return repo.ProjectEvents.AddProjectGrant(ctx, app)
}

func (repo *ProjectRepo) ChangeProjectGrant(ctx context.Context, app *proj_model.ProjectGrant) (*proj_model.ProjectGrant, error) {
	return repo.ProjectEvents.ChangeProjectGrant(ctx, app)
}

func (repo *ProjectRepo) DeactivateProjectGrant(ctx context.Context, projectID, appID string) (*proj_model.ProjectGrant, error) {
	return repo.ProjectEvents.DeactivateProjectGrant(ctx, projectID, appID)
}

func (repo *ProjectRepo) ReactivateProjectGrant(ctx context.Context, projectID, appID string) (*proj_model.ProjectGrant, error) {
	return repo.ProjectEvents.ReactivateProjectGrant(ctx, projectID, appID)
}

func (repo *ProjectRepo) RemoveProjectGrant(ctx context.Context, projectID, appID string) error {
	app := proj_model.NewProjectGrant(projectID, appID)
	return repo.ProjectEvents.RemoveProjectGrant(ctx, app)
}

func (repo *ProjectRepo) ProjectGrantMemberByID(ctx context.Context, projectID, grantID, userID string) (member *proj_model.ProjectGrantMember, err error) {
	member = proj_model.NewProjectGrantMember(projectID, grantID, userID)
	return repo.ProjectEvents.ProjectGrantMemberByIDs(ctx, member)
}

func (repo *ProjectRepo) AddProjectGrantMember(ctx context.Context, member *proj_model.ProjectGrantMember) (*proj_model.ProjectGrantMember, error) {
	return repo.ProjectEvents.AddProjectGrantMember(ctx, member)
}

func (repo *ProjectRepo) ChangeProjectGrantMember(ctx context.Context, member *proj_model.ProjectGrantMember) (*proj_model.ProjectGrantMember, error) {
	return repo.ProjectEvents.ChangeProjectGrantMember(ctx, member)
}

func (repo *ProjectRepo) RemoveProjectGrantMember(ctx context.Context, projectID, grantID, userID string) error {
	member := proj_model.NewProjectGrantMember(projectID, grantID, userID)
	return repo.ProjectEvents.RemoveProjectGrantMember(ctx, member)
}

func (repo *ProjectRepo) SearchProjectGrantMembers(ctx context.Context, request *proj_model.ProjectGrantMemberSearchRequest) (*proj_model.ProjectGrantMemberSearchResponse, error) {
	request.EnsureLimit(repo.SearchLimit)
	members, count, err := repo.View.SearchProjectGrantMembers(request)
	if err != nil {
		return nil, err
	}
	return &proj_model.ProjectGrantMemberSearchResponse{
		Offset:      request.Offset,
		Limit:       request.Limit,
		TotalResult: uint64(count),
		Result:      model.ProjectGrantMembersToModel(members),
	}, nil
}

func (repo *ProjectRepo) GetProjectMemberRoles() []string {
	roles := make([]string, 0)
	for _, roleMap := range repo.Roles {
		if strings.HasPrefix(roleMap, "PROJECT") && !strings.HasPrefix(roleMap, "PROJECT_GRANT") {
			roles = append(roles, roleMap)
		}
	}
	return roles
}

func (repo *ProjectRepo) GetProjectGrantMemberRoles() []string {
	roles := make([]string, 0)
	for _, roleMap := range repo.Roles {
		if strings.HasPrefix(roleMap, "PROJECT_GRANT") {
			roles = append(roles, roleMap)
		}
	}
	return roles
}
