import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpectionHandlerController } from './expection-handler/expection-handler.controller';
import { ExpectionHandlerModule } from './expection-handler/expection-handler.module';

@Module({
  imports: [ExpectionHandlerModule],
  controllers: [AppController, ExpectionHandlerController],
  providers: [AppService],
})
export class AppModule {}
