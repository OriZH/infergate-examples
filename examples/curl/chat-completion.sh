#!/usr/bin/env bash
set -euo pipefail

: "${INFERGATE_API_KEY:?Please set INFERGATE_API_KEY}"
BASE_URL="${INFERGATE_BASE_URL:-https://api.useinfergate.com/v1}"
MODEL="${INFERGATE_MODEL:-gpt-5.5}"

curl "${BASE_URL}/chat/completions" \
  -H "Authorization: Bearer ${INFERGATE_API_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\n    \"model\": \"${MODEL}\",\n    \"messages\": [\n      {\"role\": \"user\", \"content\": \"Say hello from InferGate in one sentence.\"}\n    ]\n  }"
