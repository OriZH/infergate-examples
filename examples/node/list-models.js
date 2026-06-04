import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.INFERGATE_API_KEY,
  baseURL: process.env.INFERGATE_BASE_URL || 'https://api.useinfergate.com/v1',
});

const models = await client.models.list();

for (const model of models.data) {
  console.log(model.id);
}
