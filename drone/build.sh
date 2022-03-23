#!/bin/bash

# $1 - filename of Dockerfile

set -e

export MODE=production
export NODE_ENV=production 
export VERSION=v$(node -p -e "require('./package.json').version").$DRONE_BUILD_NUMBER

echo "Building '$VERSION'"

docker build \
  --platform=linux/amd64 \
  --build-arg MODE \
  --build-arg NODE_ENV \
  --build-arg VERSION \
  -f $1.Dockerfile \
  -t cr.yandex/crptshuuct3ne1mn7rg1/stageui-$1:$VERSION \
  .