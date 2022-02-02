#!/usr/bin/env sh

npm run build 

git add .

git commit -am 'New Deployment'

git push heroku main
