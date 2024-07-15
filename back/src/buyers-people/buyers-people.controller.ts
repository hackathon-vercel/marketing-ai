import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBuyerPersonDto } from './dtos/buyers.person.dto';

const name  = 'buyers'

@ApiTags(name)
@Controller(name)
export class BuyersPeopleController {

    // Endpoint para crear un buyer persona

    @Post()
    createBuyerPerson(@Body() payload: CreateBuyerPersonDto): CreateBuyerPersonDto {
        return payload
    }

}
