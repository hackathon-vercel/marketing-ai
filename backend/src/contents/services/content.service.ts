import { Injectable } from '@nestjs/common';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { KeywordsDto } from '../dtos/contents.dto';
import { CreateContentDto } from './../dtos/contents.dto';

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

  async content(params: CreateContentDto) {
    const { keyword, objective, tone, message } = params;

    const keywords = keyword.join(', ');

    try {
      const { text } = await generateText({
        model: google('models/gemini-1.5-flash-latest'),
        prompt: `Toma las siguientes palabras clave y crea 1 anuncio de texto para sr usando en Google ADS. Las palabras claves son ${keywords}. El anuncio debe tener 1 titulo, con maximo 30 caracateres incluyendo espacios. Y 1 descripcion con un maximo de 90 caracteres incluyendo espacios. El anuncio debe incluir una propuesta de valor, beneficios y caracteristicas del producto anunciado. El objectivo del anuncio es ${objective}, el tono es ${tone} y el mensaje a principal a transmitir es ${message}, retorna la informacion en formato json`,
      });

      const replaceText = text.replace(/```json\s*|\s*```/g, '');

      return JSON.parse(replaceText);
    } catch (error) {
      console.log('ERROR ==========> ', error);
      return error;
    }
  }
}
