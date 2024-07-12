import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiConflictResponse, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ContentDto, CreateContentDto } from './dtos/contents.dto';
import { htmlContent } from './docs';

const name = 'contents'

@ApiTags(name)
@Controller(name)
export class ContentsController {

    // Endpoint para listar datos que se pueden obtener del Buyer persona
    @Get('/list-data-allowed-of-buyer-person')
    @ApiOkResponse({description: 'Retorna una lista de elemenos que puede elegir el usuario'})
    findDataAllowToGetOfBuyerPerson() {
        return [
            'Género',
            'Edad',
            'Ubicación',
            'Estado civil',
            'Trabajo',
            'Intereses',
            'Comportamientos',
            'Historial web'
        ]
    }

    // Endpoint para listar los objectivos de un anuncio

    @Get('/list-ad-objectives')
    findAdObjectivesToCreateContent() {
        return [
            'Informativo',
            'Documental',
            'Chistoso'
        ]
    }

    // Endpoint para listar los tono de una anuncio

    @Get('/list-ad-tone')
    findAdTone() {
        return 'Allo tone'
    }

    // Endpoint para crear un buyer persona

    @Post('/buyer-person')
    createBuyerPerson() {
        return 'Create Buyer Person'
    }

    // Endpoint para llamar a la api del SDK y obtener una lista de siete palabras de cola larga

    @Get('/list-keywords')
    findKeyWord() {
        return [
            {
                'name': 'ABCD',
                'type': 'Abecedario'
            }
        ]
    }

    @Get()
    createContentWithAI() {
        return 'Create content'
    }

    // Endpoint para crear el contenido

    @Post()
    // Swagger
    @ApiOperation({summary: 'Crear contenidos de marketing', description: htmlContent})
    @ApiBody({ type: CreateContentDto })
    @ApiCreatedResponse({description: 'Contenido de marketing creado y entregado'})
    @ApiBadRequestResponse({description: 'Hay una parametro que se escribio o se paso mal'})
    @ApiUnauthorizedResponse({description: 'No estas autenticado, tienes que iniciar sesion y pasar el token por el header Authorization'})
    @ApiForbiddenResponse({description: 'Se quien eres pero no tienes permitido usar estos recursos'})
    @ApiConflictResponse({description: 'Hay un proceso en el backend que salio mal y dio conflicto con los datos proporcionado, notificar al desarrollador'})
    createContents(@Body() payload: CreateContentDto): ContentDto {
        return {...payload, 'id': '123'}
    }
}
