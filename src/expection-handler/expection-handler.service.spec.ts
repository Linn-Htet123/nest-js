import { Test, TestingModule } from '@nestjs/testing';
import { ExpectionHandlerService } from './expection-handler.service';

describe('ExpectionHandlerService', () => {
  let service: ExpectionHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpectionHandlerService],
    }).compile();

    service = module.get<ExpectionHandlerService>(ExpectionHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
