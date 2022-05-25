#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'chore: deploy docs'

git push -f https://github.com/xiaoluoboding/self-hosted-app-starter.git master:gh-pages

cd -