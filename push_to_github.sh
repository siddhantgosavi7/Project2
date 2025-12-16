#!/bin/bash
GITHUB_USERNAME="atharvWaste"
REPO_NAME="weather-app"
echo "starting gitgub pushing script"
if [ ! -d ".git" ]; then
  git init
echo "git initialization"
fi
git add .
git commit -m "Indepandance, moved backend+frontend in my file"

git remote | grep origin >/dev/null
if [ $? -ne 0 ]; then
  git remote add origin https://github.com/atharvWaste/weather-app.git
  echo "Remote added"
fi

git branch -M main
git push -u origin main

echo " Done! code pushed to gitHub"