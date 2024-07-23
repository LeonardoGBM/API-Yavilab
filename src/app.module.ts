import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { LaboratoryController } from './laboratory/laboratory.controller';

@Module({
  imports: [LaboratoryModule],
  controllers: [AppController, LaboratoryController],
  providers: [AppService],
})
export class AppModule {}
