import os
from openai import OpenAI


class InferGate:
    """Minimal InferGate client wrapper around the OpenAI Python SDK."""

    def __init__(self, api_key=None, base_url=None, default_model=None):
        self.api_key = api_key or os.getenv("INFERGATE_API_KEY")
        self.base_url = base_url or os.getenv("INFERGATE_BASE_URL", "https://api.useinfergate.com/v1")
        self.default_model = default_model or os.getenv("INFERGATE_MODEL", "gpt-4o-mini")
        self.client = OpenAI(api_key=self.api_key, base_url=self.base_url)

    def chat(self, message, model=None, system="You are a helpful assistant."):
        response = self.client.chat.completions.create(
            model=model or self.default_model,
            messages=[
                {"role": "system", "content": system},
                {"role": "user", "content": message},
            ],
        )
        return response.choices[0].message.content

    def list_models(self):
        return [model.id for model in self.client.models.list().data]
