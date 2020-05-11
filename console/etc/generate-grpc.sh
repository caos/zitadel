#! /bin/sh

set -eux

GEN_PATH=${GOPATH}/src/github.com/caos/zitadel/console/src/app/proto/generated

echo "Remove old files"
rm -rf $GEN_PATH

echo "Create folders"
mkdir -p $GEN_PATH

echo "Generate grpc"

protoc \
  -I=/usr/local/include \
  -I=${GOPATH}/src/github.com/caos/zitadel/management/api/proto \
  -I=${GOPATH}/src/github.com/caos/zitadel/auth/api/proto \
  -I=${GOPATH}/src/github.com/caos/zitadel/admin/api/proto \
  -I=${GOPATH}/src/github.com/caos/zitadel/utils/protoc/protoc-gen-authoption \
  -I=${GOPATH}/src/github.com/caos/zitadel/console/node_modules/google-proto-files \
  -I=${GOPATH}/src/github.com/envoyproxy/protoc-gen-validate \
  -I=${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway \
  --js_out=import_style=commonjs,binary:$GEN_PATH \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:$GEN_PATH \
  ${GOPATH}/src/github.com/caos/zitadel/management/api/proto/*.proto \
  ${GOPATH}/src/github.com/caos/zitadel/admin/api/proto/*.proto \
  ${GOPATH}/src/github.com/caos/zitadel/auth/api/proto/*.proto

echo "Generate annotations js file (compatibility)"

mkdir -p $GEN_PATH/google/api/
touch $GEN_PATH/google/api/annotations_pb.js
echo "export {}" > $GEN_PATH/google/api/annotations_pb.d.ts

mkdir -p $GEN_PATH/validate
touch $GEN_PATH/validate/validate_pb.js
echo "export {}" > $GEN_PATH/validate/validate_pb.d.ts

mkdir -p $GEN_PATH/protoc-gen-swagger/options
touch $GEN_PATH/protoc-gen-swagger/options/annotations_pb.js
echo "export {}" > $GEN_PATH/protoc-gen-swagger/options/annotations_pb.d.ts

mkdir -p $GEN_PATH/authoption
touch $GEN_PATH/authoption/options_pb.js
echo "export {}" > $GEN_PATH/authoption/options_pb.d.ts
