# Development

You should stay in the ZITADEL root directory to execute the statements in the following chapters.

## Prerequisite

- Buildkit compatible docker installation

### env variables

You can use the default vars provided in [this .env-file](../build/local/local.env) or create your own and update the paths in the [docker compose file](../build/local/docker-compose-local.yml).

## Generate required files

This part is relevant if you start the backend or console without docker compose.

### Console

This command generates the grpc stub for console into the folder console/src/app/proto/generated for local development.

```bash
DOCKER_BUILDKIT=1 docker build -f build/console/Dockerfile . -t zitadel:gen-fe --target npm-copy -o .
```

### Backend

With this command you can generate the stub for the backend.

```bash
# generates grpc stub
DOCKER_BUILDKIT=1 docker build -f build/zitadel/Dockerfile . -t zitadel:gen-be --target go-copy -o .
# generates keys for cryptography
DOCKER_BUILDKIT=1 docker build --target copy-keys -f build/local/Dockerfile.keys . -o .keys
```

## Run

### Initialise data

Used if you want to setup the database and load the initial data.

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f ./build/local/docker-compose-local.yml --profile database --profile init-backend -p zitadel up
```

You can stop as soon as db-migrations AND backend-setup returned with exit code 0.

### Initialise frontend

Used to set the client id of the console. This step is for local development. If you don't work with a local backend you have to set the client id manually.

You must [initialise the data](###-Initialise-data)) first.

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f ./build/local/docker-compose-local.yml --profile database --profile backend --profile init-frontend -p zitadel up --exit-code-from client-id
```

The command exists as soon as the client id is set.

### Run database

Used if you want to run the backend/console locally and only need the database. It's recommended to [initialise the data](###-Initialise-data) first.

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f ./build/local/docker-compose-local.yml --profile database -p zitadel up
```

**On apple silicon:**
Restart the command (second terminal `docker restart zitadel_<SERVICE_NAME>_1`) if `db` logs `qemu: uncaught target signal 11 (Segmentation fault) - core dumped` or no logs are written from `db-migrations`.

### Run Console

The console service is configured for hot reloading. You can also use docker compose for local development.

If you don't use the backend from local you have to configure [the environment.json](../build/local/environment.json) manually.

If you use the local backend ensure that you have [set the correct client id](###-Initialise-frontend).

#### Run console in docker compose

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f ./build/local/docker-compose-local.yml --profile frontend -p zitadel up
```

### Run backend

Used if you want to run the backend locally. It's recommended to [initialise the data](###-Initialise-data) first.

#### Run backend in docker compose

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f ./build/local/docker-compose-local.yml --profile database --profile backend -p zitadel up
```

#### Run backend locally

##### Export environment variables

```bash
# exports all default env variables
while read line; do
    if [[ $line != #* ]] && [[ ! -z $line ]]; then
        export $line
    fi
done < build/local/local.env
```

##### Start command for backend

```bash
# starts zitadel with default config files
go run cmd/zitadel/main.go -console=false -localDevMode=true -config-files=cmd/zitadel/startup.yaml -config-files=cmd/zitadel/system-defaults.yaml -config-files=cmd/zitadel/authz.yaml start
```

If you want to run your backend locally and the frontend by docker compose you have to replace the following variables:

[docker compose yaml](../build/local/docker-compose-local.yml):

```yaml
service:
  client-id:
    environment:
      - HOST=backend-run
  grpc-web-gateway:
    environment:
      - BKD_HOST=backend-run
```

with

```yaml
service:
  client-id:
    environment:
      - HOST=host.docker.internal
  grpc-web-gateway:
    environment:
      - BKD_HOST=host.docker.internal
```

##### Setup ZITADEL

The following command starts the backend of ZITADEL with the default config files:

```bash
go run cmd/zitadel/main.go -setup-files=cmd/zitadel/setup.yaml -setup-files=cmd/zitadel/system-defaults.yaml -setup-files=cmd/zitadel/authz.yaml setup
```

## Initial login credentials

**username**: `zitadel-admin@caos-ag.zitadel.ch`

**password**: `Password1!`
