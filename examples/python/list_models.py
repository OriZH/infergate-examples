import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("INFERGATE_API_KEY"),
    base_url=os.getenv("INFERGATE_BASE_URL", "https://api.useinfergate.com/v1"),
)

models = client.models.list()

for model in models.data:
    print(model.id)
