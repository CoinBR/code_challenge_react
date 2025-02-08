#!/bin/sh
set -e

DIR=$(dirname "$(readlink -f "$0")")
cd $DIR
. ./.env
ui/run.sh
