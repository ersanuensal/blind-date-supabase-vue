#!/usr/bin/env sh

set -e

npm run build --base=/blind-date-supabase-vue/

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:ersanuensal/blind-date-supabase-vue.git master:live

cd -