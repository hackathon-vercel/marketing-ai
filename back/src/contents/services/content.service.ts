import { Injectable } from '@nestjs/common';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { KeywordsDto } from '../dtos/contents.dto';
// import { CreateBuyerPersonDto } from '../dtos/buyers.person.dto';

@Injectable()
export class ContentService {
  async keywords(params: KeywordsDto) {
    const { term } = params;

    try {
      const { text } = await generateText({
        model: google('models/gemini-1.5-flash-latest'),
        prompt: `Sugiere una lista de siete palabras de cola larga y sinosimos con una intencion de busqueda similar a ${term} para ser usado en Google ADS, retorna la informacion en formato json dentro de key llamado data la cual sera una lista que contenga objectos con 2 elementos, el primer elemento tiene la sugerencia de la palabra clave y el segundo elemento tiene el tipo de intencio de busqueda, en la cual escribiras el tipo de intencio de busqueda de cada palbra; bien sea informacion, comercial o transaccional`,
      });

      const replaceText = text.replace(/```json\s*|\s*```/g, '');

      return JSON.parse(replaceText);
    } catch (error) {
      console.log('ERROR ==========> ', error);
      return error;
    }
  }

  async content(params: any) {
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
