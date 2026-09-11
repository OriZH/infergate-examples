import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("INFERGATE_API_KEY"),
    base_url=os.getenv("INFERGATE_BASE_URL", "https://api.useinfergate.com/v1"),
)

model = os.getenv("INFERGATE_MODEL", "gpt-5.5")

response = client.chat.completions.create(
    model=model,
    messages=[
        {"role": "system", "content": "You are a concise assistant."},
        {"role": "user", "content": "Say hello from InferGate in one sentence."},
    ],
)

print(response.choices[0].message.content)
