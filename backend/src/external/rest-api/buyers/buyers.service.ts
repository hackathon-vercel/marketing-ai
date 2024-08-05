import { Injectable } from '@nestjs/common';
// import { IPromptGetBuyerPerson } from './../../../domain/application/interfaces/prompts/IPropmts';
import { gText } from './../../SDKs/ai-sdk';
import { PROMPT_CREATE_BUYER_PERSON } from './../../../domain/contracts/prompts';
import { CreateBuyerPerson } from './../../../domain/useCase/createBuyerPersonCommandHandler';
import { CreateBuyerPersonDto } from './../../../domain/dto/buyer.person.dto';

@Injectable()
export class BuyersService {
  //   constructor() {}

  async create(params: CreateBuyerPersonDto) {
    const buyer = new CreateBuyerPerson(gText);

    buyer.companyName = params.companyName;
    buyer.companyDescription = params.companyDescription;
    buyer.dataSearch = params.dataSearch;
    buyer.prompt = PROMPT_CREATE_BUYER_PERSON;

    const response = await buyer.call();

    return response;
  }
}
