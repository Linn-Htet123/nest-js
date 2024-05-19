import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpectionHandlerController } from './expection-handler/expection-handler.controller';
import { ExpectionHandlerModule } from './expection-handler/expection-handler.module';
import { ExpectionHandlerService } from './expection-handler/expection-handler.service';
import { PipesController } from './pipes/pipes.controller';
import { PipesService } from './pipes/pipes.service';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [ExpectionHandlerModule, PipesModule],
  controllers: [AppController, ExpectionHandlerController, PipesController],
  providers: [AppService, ExpectionHandlerService, PipesService],
})
export class AppModule {}
