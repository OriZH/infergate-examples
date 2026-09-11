"""Guide: https://useinfergate.com/guides/python-openai-api"""
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["INFERGATE_API_KEY"],
    base_url="https://api.useinfergate.com/v1",
)
response = client.responses.create(
    model=os.environ.get("INFERGATE_MODEL", "gpt-5.5"),
    input="Return a short release note for an API client update.",
    max_output_tokens=256,
)
if response.status != "completed" or not response.output_text.strip():
    raise RuntimeError("Response did not complete with useful text")
print(response.output_text)
