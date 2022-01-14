#!/bin/bash

set -e

export NAMESPACE="$DRONE_DEPLOY_TO"
export VERSION=v$(node -p -e "require('./package.json').version").$DRONE_BUILD_PARENT

echo $KUBE_CONFIG | base64 -d > kubeconfig.yml

echo "Deploy version '$VERSION' to '$NAMESPACE'"

awk 'FNR==1{print "---"}{print}' ./deploy/manifests/*.yaml | \
sed "s/_NAMESPACE/$NAMESPACE/g" | \
sed "s/_VERSION/$VERSION/g" | \
kubectl --kubeconfig=kubeconfig.yml apply -f  -