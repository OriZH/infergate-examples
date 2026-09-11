import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.INFERGATE_API_KEY,
  baseURL: process.env.INFERGATE_BASE_URL || 'https://api.useinfergate.com/v1',
});

const model = process.env.INFERGATE_MODEL || 'gpt-5.5';

const stream = await client.chat.completions.create({
  model,
  messages: [{ role: 'user', content: 'Write a short product tagline for InferGate.' }],
  stream: true,
});

for await (const chunk of stream) {
  const delta = chunk.choices[0]?.delta?.content;
  if (delta) process.stdout.write(delta);
}

process.stdout.write('\n');
