import { Test, TestingModule } from '@nestjs/testing';
import { ExpectionHandlerController } from './expection-handler.controller';

describe('ExpectionHandlerController', () => {
  let controller: ExpectionHandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpectionHandlerController],
    }).compile();

    controller = module.get<ExpectionHandlerController>(ExpectionHandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
