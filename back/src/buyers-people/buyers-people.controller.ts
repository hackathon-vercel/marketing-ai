import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBuyerPersonDto } from './dtos/buyers.person.dto';
import { BuyerService } from './services/buyer.service';

const name  = 'buyers'

@ApiTags(name)
@Controller(name)
export class BuyersPeopleController {
    constructor(private buyerPersonService: BuyerService) {}
    // Endpoint para crear un buyer persona

    @Post()
    async createBuyerPerson(@Body() payload: CreateBuyerPersonDto) {
        const buyerPerson = await this.buyerPersonService.aiCreate('')
        return buyerPerson
    }

}
