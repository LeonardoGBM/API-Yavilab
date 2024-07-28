import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratoryModule } from './laboratory/laboratory.module';


@Module({
  imports: [LaboratoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
