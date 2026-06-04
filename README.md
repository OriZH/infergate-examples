# InferGate Examples

OpenAI-compatible API examples and lightweight SDK starters for **InferGate**.

InferGate is a unified AI API gateway for developers who want to call multiple AI model providers through a familiar OpenAI-compatible interface.

- Website: https://useinfergate.com
- API Base URL: `https://api.useinfergate.com/v1`
- Sign up: https://api.useinfergate.com/register
- Sign in: https://api.useinfergate.com/sign-in

## Quick start

Create an account, top up your balance, create an API key in the dashboard, then use the examples in this repository.

```bash
export INFERGATE_API_KEY="your_infergate_api_key"
export INFERGATE_BASE_URL="https://api.useinfergate.com/v1"
export INFERGATE_MODEL="gpt-4o-mini"
```

## OpenAI SDK compatible usage

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

## Notes

Model availability depends on the upstream channels enabled in your InferGate account. Check your dashboard or `/v1/models` before using a model in production.

## License

MIT
