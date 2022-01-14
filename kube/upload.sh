#!/bin/bash

# $1 - filename of Dockerfile

export VERSION=v$(node -p -e "require('./package.json').version").$DRONE_BUILD_NUMBER

echo "Upload '$VERSION'"

echo $DOCKER_KEY | base64 -d | docker login --username json_key --password-stdin cr.yandex

docker tag cr.yandex/crptshuuct3ne1mn7rg1/$1:$VERSION cr.yandex/crptshuuct3ne1mn7rg1/$1:vlatest
docker push cr.yandex/crptshuuct3ne1mn7rg1/$1:$VERSION
docker push cr.yandex/crptshuuct3ne1mn7rg1/$1:vlatest