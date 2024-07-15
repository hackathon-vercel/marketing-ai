import { Test, TestingModule } from '@nestjs/testing';
import { BuyersPeopleController } from './buyers-people.controller';

describe('BuyersPeopleController', () => {
  let controller: BuyersPeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyersPeopleController],
    }).compile();

    controller = module.get<BuyersPeopleController>(BuyersPeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
