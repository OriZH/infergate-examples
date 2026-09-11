# InferGate Examples

OpenAI-compatible API examples and lightweight SDK starters for **InferGate**.

InferGate is a unified AI API gateway for developers who want to call multiple AI model providers through a familiar OpenAI-compatible interface.

Start with a [Responses API example](#responses-api-quickstart) for the four
currently published model IDs. Requests consume account credit; examples do
not promise free access or production availability for every account.

- Website: https://useinfergate.com
- API Base URL: `https://api.useinfergate.com/v1`
- Sign up: https://app.useinfergate.com/sign-up
- Sign in: https://app.useinfergate.com/sign-in

## Quick start

Create an account, top up your balance, create an API key in the dashboard, then use the examples in this repository.

```bash
export INFERGATE_API_KEY="your_infergate_api_key"
export INFERGATE_BASE_URL="https://api.useinfergate.com/v1"
export INFERGATE_MODEL="gpt-5.5"
```

## OpenAI SDK compatible usage

### Responses API quickstart

Use a current OpenAI SDK release with Responses support. Keep the key in your
server environment. These examples require completed, non-empty text output.

```bash
# Python, from the repository root
python -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade openai
python examples/python/responses.py

# Node.js
cd examples/node
npm install openai@latest
node responses.mjs
```

| Integration question | Guide |
|---|---|
| Get GPT-5.5 API access | [Setup and prepaid usage](https://useinfergate.com/gpt-5-5-api) |
| Choose a GPT-5.6 variant | [GPT-5.6 API](https://useinfergate.com/gpt-5-6-api) |
| Select sol or terra | [Variant evaluation worksheet](https://useinfergate.com/compare/gpt-5-6-sol-vs-terra) |
| Evaluate a provider migration | [OpenRouter alternative checklist](https://useinfergate.com/compare/openrouter-alternative) |
| Understand gateway responsibilities | [AI API gateway](https://useinfergate.com/ai-api-gateway) |

The SDK examples below also include Chat Completions patterns. Validate that
endpoint and any optional parameters separately for your workload.

### Python

```bash
cd examples/python
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python chat_completion.py
```

### Node.js

```bash
cd examples/node
npm install
npm run chat
```

### cURL

```bash
cd examples/curl
chmod +x chat-completion.sh
./chat-completion.sh
```

## Repository structure

```text
examples/
  curl/       cURL request examples
  python/     Python examples using the OpenAI SDK
  node/       Node.js examples using the OpenAI SDK
sdk/
  python/     Lightweight Python wrapper
  typescript/ Lightweight TypeScript wrapper
docs/         Integration guides
postman/      Postman collection
```

## Environment variables

| Variable | Description |
|---|---|
| `INFERGATE_API_KEY` | Your InferGate API key |
| `INFERGATE_BASE_URL` | Defaults to `https://api.useinfergate.com/v1` |
| `INFERGATE_MODEL` | Model name enabled in your InferGate dashboard |

## Current models and integration guides

The current public model identifiers are `gpt-5.5`, `gpt-5.6-sol`,
`gpt-5.6-terra`, and `gpt-6-astra`. Use the exact identifier; family names
are not aliases. Your authenticated model list remains authoritative for
account access. Retired models return `model_not_available` without silent
substitution.

- [GPT-5.5 model](https://useinfergate.com/models/gpt-5-5)
- [GPT-5.6 sol model](https://useinfergate.com/models/gpt-5-6-sol)
- [GPT-5.6 terra model](https://useinfergate.com/models/gpt-5-6-terra)
- [GPT-6 astra model](https://useinfergate.com/models/gpt-6-astra)
- [Python SDK guide](https://useinfergate.com/guides/python-openai-api)
- [Node.js SDK guide](https://useinfergate.com/guides/nodejs-openai-api)
- [Streaming completion and cancellation](https://useinfergate.com/guides/api-streaming)
- [Custom base URL configuration](https://useinfergate.com/guides/openai-sdk-custom-base-url)
- [OpenAI-compatible API](https://useinfergate.com/openai-compatible-api)
- [Prepaid pricing](https://useinfergate.com/pricing)

The guides use the Responses API, verified for all four current models.
Existing Chat Completions examples demonstrate that endpoint's request format;
verify the endpoint and optional parameters required by your workload before
migrating traffic.

Model availability depends on the upstream channels enabled in your InferGate account. Check your dashboard or `/v1/models` before using a model in production.

## License

MIT
