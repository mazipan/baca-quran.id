#!/bin/bash
set -euo pipefail

# Only run in remote Claude Code environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Use the Node version pinned in .nvmrc
NODE_BIN="/versions/node/v$(cat "$CLAUDE_PROJECT_DIR/.nvmrc")/bin"

if [ ! -f "$NODE_BIN/node" ]; then
  echo "Node $NODE_BIN not found — falling back to system node" >&2
  NODE_BIN=""
fi

if [ -n "$NODE_BIN" ]; then
  export PATH="$NODE_BIN:$PATH"
fi

# Activate the pnpm version declared in package.json via corepack
corepack enable pnpm

# Install dependencies (frozen lockfile to catch drift)
pnpm install --frozen-lockfile

# Persist Node bin to the session environment so all subsequent
# Claude tool calls (check, lint, build) also use the right Node.
if [ -n "$NODE_BIN" ]; then
  echo "export PATH=\"$NODE_BIN:\$PATH\"" >> "$CLAUDE_ENV_FILE"
fi
