import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("INFERGATE_API_KEY"),
    base_url=os.getenv("INFERGATE_BASE_URL", "https://api.useinfergate.com/v1"),
)

model = os.getenv("INFERGATE_MODEL", "gpt-5.5")

stream = client.chat.completions.create(
    model=model,
    messages=[{"role": "user", "content": "Write a short product tagline for InferGate."}],
    stream=True,
)

for chunk in stream:
    delta = chunk.choices[0].delta.content
    if delta:
        print(delta, end="", flush=True)

print()
