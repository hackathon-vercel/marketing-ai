import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiConflictResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ContentDto, CreateContentDto, KeywordsDto } from './dtos/contents.dto';
import { ContentService } from './services/content.service';
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
    const response = await this.contentService.keywords(payload);
    return response;
  }
  // Endpoint para crear el contenido

  @Post()
  // Swagger
  // @ApiOperation({summary: 'Crear contenidos de marketing', description: htmlContent})
  @ApiBody({ type: CreateContentDto })
  @ApiCreatedResponse({ description: 'Contenido de marketing creado y entregado' })
  @ApiBadRequestResponse({ description: 'Hay una parametro que se escribio o se paso mal' })
  @ApiUnauthorizedResponse({ description: 'No estas autenticado, tienes que iniciar sesion y pasar el token por el header Authorization' })
  @ApiForbiddenResponse({ description: 'Se quien eres pero no tienes permitido usar estos recursos' })
  @ApiConflictResponse({ description: 'Hay un proceso en el backend que salio mal y dio conflicto con los datos proporcionado, notificar al desarrollador' })
  createContents(@Body() payload: CreateContentDto) {
    return { ...payload, id: '123' };
  }
}
