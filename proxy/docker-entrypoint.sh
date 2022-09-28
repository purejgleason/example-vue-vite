#!/usr/bin/env sh
set -eu
envsubst '${CLOUD_URL} ${UI_URL}'  < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
cat /etc/nginx/conf.d/default.conf
exec "$@"