package grpc

import (
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	"google.golang.org/grpc"

	admin_auth "github.com/caos/zitadel/internal/admin/auth"
	"github.com/caos/zitadel/internal/admin/repository"
	"github.com/caos/zitadel/internal/api/authz"
	grpc_util "github.com/caos/zitadel/internal/api/grpc"
	"github.com/caos/zitadel/internal/api/grpc/server/middleware"
	authz_repo "github.com/caos/zitadel/internal/authz/repository/eventsourcing"
	"github.com/caos/zitadel/internal/config/systemdefaults"
)

var _ AdminServiceServer = (*Server)(nil)

type Server struct {
	port          string
	org           repository.OrgRepository
	verifier      authz.TokenVerifier
	authZ         authz.Config
	iam           repository.IamRepository
	administrator repository.AdministratorRepository
	repo          repository.Repository
}

func StartServer(conf grpc_util.ServerConfig, authZRepo *authz_repo.EsRepository, authZ authz.Config, repo repository.Repository) *Server {
	return &Server{
		port:          conf.Port,
		org:           repo,
		iam:           repo,
		administrator: repo,
		repo:          repo,
		authZ:         authZ,
		verifier:      admin_auth.Start(authZRepo),
	}
}

func (s *Server) GRPCPort() string {
	return s.port
}

func (s *Server) GRPCServer(defaults systemdefaults.SystemDefaults) (*grpc.Server, error) {
	gs := grpc.NewServer(
		middleware.TracingStatsServer("/Healthz", "/Ready", "/Validate"),
		grpc.UnaryInterceptor(
			grpc_middleware.ChainUnaryServer(
				middleware.ErrorHandler(defaults.DefaultLanguage),
				AdminService_Authorization_Interceptor(s.verifier, &s.authZ),
			),
		),
	)
	RegisterAdminServiceServer(gs, s)
	return gs, nil
}
