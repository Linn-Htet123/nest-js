import { Module } from '@nestjs/common';
import { ExpectionHandlerService } from './expection-handler.service';

@Module({
  providers: [ExpectionHandlerService],
})
export class ExpectionHandlerModule {}
