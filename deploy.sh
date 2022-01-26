#!/usr/bin/env sh

set -e

npm run build --base=/blind-date-supabase-vue/

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:ersanuensal/ersanuensal.github.io master:gh-pages

cd -