import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyController } from './MyController';


@Module({
  imports: [],
  controllers: [AppController,MyController],
  providers: [AppService],
})
export class AppModule {}
