import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateContentDto } from './../../../domain/dto/content.dto';
import { IPromptCreateContent, IPromptGetKeyWorks } from './../../../domain/application/interfaces/prompts/IPropmts';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { KeywordsDto } from '../../../contents/dtos/contents.dto';
import { ContentService } from './contents.service';
// import { htmlContent } from './docs';

const name = 'contents';

@ApiTags(name)
@Controller(name)
export class ContentsController {
  constructor(private contentService: ContentService) {}

  // Endpoint para listar datos que se pueden obtener del Buyer persona
  @Get('/list-data-allowed-of-buyer-person')
  @ApiOkResponse({ description: 'Retorna una lista de elemenos que puede elegir el usuario' })
  findDataAllowToGetOfBuyerPerson() {
    return { data: ['Genero', 'Edad', 'Ubicacion', 'Estado Civil', 'Trabajo', 'Intereses', 'Comportamientos', 'Historial web'] };
  }
  // Endpoint para listar los tono de una anuncio

  @Get('/list-ad-tone')
  findAdTone() {
    return { data: ['Formal', 'Informal', 'Humorístico', 'Persuasivo', 'Inspirador', 'Autoritativo', 'Emotivo', 'Urgente', 'Neutro', 'Optimista', 'Provocativo', 'Informativo', 'Casual', 'Respetuoso', 'Innovador', 'Nostálgico', 'Juguetón', 'Sofisticado'] };
  }

  // Endpoint para llamar a la api del SDK y obtener una lista de siete palabras de cola larga

  @Post('/keywords')
  async findKeyWord(@Body() payload: KeywordsDto) {
    const response = await this.contentService.createContent(payload);
    return response;
  }
  // Endpoint para crear el contenido

  @Post()
  async createContents(@Body() payload: CreateContentDto) {
    const response = await this.contentService.createKeywords(payload);
    return response;
  }
}
