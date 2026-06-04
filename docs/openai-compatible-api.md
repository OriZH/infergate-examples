# OpenAI-Compatible API Guide

InferGate exposes an OpenAI-compatible API endpoint so existing OpenAI SDK integrations can be migrated with minimal changes.

## Base URL

```text
https://api.useinfergate.com/v1
```

## Authentication

Use your InferGate API key as a bearer token:

```http
Authorization: Bearer YOUR_INFERGATE_API_KEY
```

## Chat completions

```bash
curl https://api.useinfergate.com/v1/chat/completions \
  -H "Authorization: Bearer $INFERGATE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {"role": "user", "content": "Hello from InferGate"}
    ]
  }'
```

## Model availability

Available models depend on your account configuration and upstream channels. Use `/v1/models` to inspect currently available models.
