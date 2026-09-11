# OpenAI-Compatible API Guide

For the verified Responses baseline, start with the
[InferGate API documentation](https://useinfergate.com/docs),
[Python guide](https://useinfergate.com/guides/python-openai-api), or
[Node.js guide](https://useinfergate.com/guides/nodejs-openai-api).
See the [custom base URL checklist](https://useinfergate.com/guides/openai-sdk-custom-base-url)
for endpoint configuration and the [streaming guide](https://useinfergate.com/guides/api-streaming)
for completion and cancellation handling. The Chat Completions example below
illustrates that request format; validate it for your own endpoint needs.

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
    "model": "gpt-5.5",
    "messages": [
      {"role": "user", "content": "Hello from InferGate"}
    ]
  }'
```

## Model availability

Available models depend on your account configuration and upstream channels. Use `/v1/models` to inspect currently available models.
