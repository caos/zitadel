FROM alpine:latest

COPY .build/angular /app/console
COPY .build/go /app