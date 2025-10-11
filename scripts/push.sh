#!/usr/bin/env bash
set -euo pipefail

if [ ! -d .git ]; then
  git init
fi

: "${GITHUB_PAT:?Set the GITHUB_PAT environment variable with a GitHub personal access token}";
GITHUB_USERNAME="${GITHUB_USERNAME:-your-github-username}"

current_remote="$(git remote get-url origin 2>/dev/null || true)"
if [ -n "$current_remote" ]; then
  git remote remove origin
fi

git remote add origin "https://${GITHUB_PAT}@github.com/${GITHUB_USERNAME}/4d-live-map.git"
git branch -M main

echo "Pushing current branch to GitHub..."
git push -u origin HEAD
