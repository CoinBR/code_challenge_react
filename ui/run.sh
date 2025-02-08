#!/bin/sh
set -e
DIR=$(dirname "$(readlink -f "$0")")
cd $DIR
. ./.env

port="$UI_PORT"

[ -n "$(lsof -t -i :${port})" ] && kill -9 $(lsof -t -i :${port})
npm i
npm run start
