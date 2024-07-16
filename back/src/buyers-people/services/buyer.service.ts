import { Injectable } from "@nestjs/common";
import { generateText } from 'ai'
import { google } from "@ai-sdk/google";

@Injectable()
export class BuyerService {

    async aiCreate(params: any) {
        const { text } = await generateText({
            model: google("models/gemini-1.5-flash"),
            prompt: "What is love?",
        })
        return text
    }
}