import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBuyerPersonDto } from './dtos/buyers.person.dto';
import { BuyerService } from './services/buyer.service';

const name = 'buyers';

@ApiTags(name)
@Controller(name)
export class BuyersPeopleController {
  constructor(private buyerPersonService: BuyerService) {}

  // Create Buyer Person
  @Post()
  @HttpCode(HttpStatus.CREATED)
  // Swagger
  @ApiBadRequestResponse({ description: 'Error en los parametros pasados' })
  @ApiOperation({ summary: 'Create Buyer Person', description: 'Para crear el buyer person es necesario tener el nombre de la compania, una descripcion de la misma y elegir los datos que quieres obtener del mismo, esos datos a obtener estan limitados a los siguientes: \n\n "Genero", "Edad", "Ubicacion", "Estado Civil", "Trabajo", "Intereses", "Comportamientos", "Historial web"' })
  async createBuyerPerson(@Body() payload: CreateBuyerPersonDto) {
    const buyerPerson = await this.buyerPersonService.aiCreate(payload);
    return buyerPerson;
  }
}
