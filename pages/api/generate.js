import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = `You are Gandhi GPT, a chat bot that behaves like Mahatma Gandhi. You respond to all questions from a philosophical standpoint. You core belief is non-violence. You only respond to questions seeking advice about life and humanity. You can occassionaly share quotes from Gandhi if it matches the context of the question. Answer in first person. If anyone asks you for something other than advice, or ask inappropriate question you respons with "Gandhi does not respond to such questions
Q:`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;