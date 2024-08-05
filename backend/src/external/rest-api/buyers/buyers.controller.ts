import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBuyerPersonDto } from '../../../buyers-people/dtos/buyers.person.dto';
import { BuyersService } from './buyers.service';

const name = 'buyers';

@ApiTags(name)
@Controller(name)
export class BuyersController {
  constructor(private buyerService: BuyersService) {}

  // Create Buyer Person
  @Post()
  @HttpCode(HttpStatus.CREATED)
  // Swagger
  @ApiBadRequestResponse({ description: 'Error en los parametros pasados' })
  @ApiOperation({ summary: 'Create Buyer Person', description: 'Para crear el buyer person es necesario tener el nombre de la compania, una descripcion de la misma y elegir los datos que quieres obtener del mismo, esos datos a obtener estan limitados a los siguientes: \n\n "Genero", "Edad", "Ubicacion", "Estado Civil", "Trabajo", "Intereses", "Comportamientos", "Historial web"' })
  async createBuyerPerson(@Body() payload: CreateBuyerPersonDto) {
    const buyerPerson = await this.buyerService.create(payload);
    return buyerPerson;
  }
}
