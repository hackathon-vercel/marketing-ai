import { Injectable } from "@nestjs/common";
import { generateText } from 'ai'
import { google } from "@ai-sdk/google";

@Injectable()
export class BuyerService {

    async aiCreate(params: any) {
        try {
            
            const { text } = await generateText({
                model: google("models/gemini-1.5-flash-latest"),
                prompt: "Crea un buyer persona para el producto CloudSystem, empresa de desarrollo de software en la nube de AWS, quiero la siguiente informacion: Genero, edad, Ubicacion, una lista de 10 terminos de busqueda, retorna la informacion en formato json",
            })

            console.log(text);
            let replaceText = text.replace(/```json\s*|\s*```/g, '')

            return JSON.parse(replaceText)
        } catch (error) {
            console.log('ERROR ==========> ', error)
            return error
        }
    }
}