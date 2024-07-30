import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratoryModule } from './laboratory/laboratory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryEntity } from './laboratory/laboratory.entity';
import { DamageModule } from './damage/damage.module';
import { DamageEntity } from './damage/damage.entity';
import { EquipoEntity } from './equipos/equipo.entity';
import { EquipoModule } from './equipos/equipo.module';


@Module({
  imports: [ LaboratoryModule, DamageModule, EquipoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'yavilab',
      entities: [LaboratoryEntity, DamageEntity, EquipoEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
