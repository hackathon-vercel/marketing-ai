import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

export const gText = async (prompt: string) => {
  try {
    const { text } = await generateText({
      model: google('models/gemini-1.5-flash-latest'),
      prompt,
    });
    const replaceText = text.replace(/```json\s*|\s*```/g, '');

    return JSON.parse(replaceText);
  } catch (error) {
    console.log('ERROR ==========> ', error);
    return error;
  }
};
