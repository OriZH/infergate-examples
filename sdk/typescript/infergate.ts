import OpenAI from 'openai';

export type InferGateOptions = {
  apiKey?: string;
  baseURL?: string;
  defaultModel?: string;
};

export class InferGate {
  private client: OpenAI;
  private defaultModel: string;

  constructor(options: InferGateOptions = {}) {
    this.client = new OpenAI({
      apiKey: options.apiKey || process.env.INFERGATE_API_KEY,
      baseURL: options.baseURL || process.env.INFERGATE_BASE_URL || 'https://api.useinfergate.com/v1',
    });
    this.defaultModel = options.defaultModel || process.env.INFERGATE_MODEL || 'gpt-5.5';
  }

  async chat(message: string, model = this.defaultModel): Promise<string> {
    const response = await this.client.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
    });

    return response.choices[0]?.message?.content || '';
  }

  async listModels(): Promise<string[]> {
    const models = await this.client.models.list();
    return models.data.map((model) => model.id);
  }
}
