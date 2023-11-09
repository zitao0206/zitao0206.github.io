#!/bin/bash
git status
sleep 2

git add -A

echo "-------Begin-------"

git commit -am "Add or Modify Articles."

git push

echo "--------End--------"
