// Guide: https://useinfergate.com/guides/nodejs-openai-api
import OpenAI from 'openai';

if (!process.env.INFERGATE_API_KEY) throw new Error('Set INFERGATE_API_KEY');
const client = new OpenAI({
  apiKey: process.env.INFERGATE_API_KEY,
  baseURL: 'https://api.useinfergate.com/v1',
});
const response = await client.responses.create({
  model: process.env.INFERGATE_MODEL || 'gpt-5.5',
  input: 'Return a short release note for an API client update.',
  max_output_tokens: 256,
});
if (response.status !== 'completed' || !response.output_text?.trim()) {
  throw new Error('Response did not complete with useful text');
}
console.log(response.output_text);
