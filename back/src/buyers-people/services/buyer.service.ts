import { Injectable } from '@nestjs/common';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { CreateBuyerPersonDto } from '../dtos/buyers.person.dto';

@Injectable()
export class BuyerService {
  async aiCreate(params: CreateBuyerPersonDto) {
    const { companyName, companyDescription, dataSearch } = params;
    const joinStringSeach = dataSearch.join(', ');

    try {
      const { text } = await generateText({
        model: google('models/gemini-1.5-flash-latest'),
        prompt: `Crea un buyer persona para el producto ${companyName}, ${companyDescription}, quiero la siguiente informacion: ${joinStringSeach}, una lista de 10 terminos de busqueda, retorna la informacion en formato json dentro de un key llamado data`,
      });

      const replaceText = text.replace(/```json\s*|\s*```/g, '');

      return JSON.parse(replaceText);
    } catch (error) {
      console.log('ERROR ==========> ', error);
      return error;
    }
  }
}
