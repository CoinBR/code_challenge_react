#!/bin/sh
set -e

DIR=$(dirname "$(readlink -f "$0")")
cd "$DIR"

git submodule update --init --recursive --remote
submodules/clone_and_claim/run.sh "$@"

