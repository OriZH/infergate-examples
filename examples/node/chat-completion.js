import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.INFERGATE_API_KEY,
  baseURL: process.env.INFERGATE_BASE_URL || 'https://api.useinfergate.com/v1',
});

const model = process.env.INFERGATE_MODEL || 'gpt-5.5';

const response = await client.chat.completions.create({
  model,
  messages: [
    { role: 'system', content: 'You are a concise assistant.' },
    { role: 'user', content: 'Say hello from InferGate in one sentence.' },
  ],
});

console.log(response.choices[0].message.content);
