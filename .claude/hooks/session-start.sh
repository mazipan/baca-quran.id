#!/bin/bash
set -euo pipefail

# Only run in remote Claude Code environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install dependencies with pnpm, bypassing the Node.js engine version check
# (remote containers run Node 22 while package.json requires >=24.14)
pnpm install --config.engine-strict=false
