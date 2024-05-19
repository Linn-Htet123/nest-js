import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ExpectionHandlerService } from './expection-handler.service';

@Controller('expection-handler')
export class ExpectionHandlerController {
  constructor(private expectionHandler: ExpectionHandlerService) {}

  @Get()
  getHello(): string {
    return this.expectionHandler.getHello();
  }

  @Get('error')
  getError(): Error {
    try {
      return this.expectionHandler.getError();
    } catch (error) {
      throw new NotFoundException('not found');
    }
  }
}
