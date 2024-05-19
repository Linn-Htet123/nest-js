import { Module } from '@nestjs/common';
import { ExpectionHandlerService } from './expection-handler.service';
import { ExpectionHandlerController } from './expection-handler.controller';

@Module({
  controllers: [ExpectionHandlerController],
  providers: [ExpectionHandlerService],
})
export class ExpectionHandlerModule {}
