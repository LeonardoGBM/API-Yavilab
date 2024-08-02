import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratoryModule } from './laboratory/laboratorio.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DamageModule } from './damage/damage.module';
import { DamageEntity } from './damage/damage.entity';
import { EquipoEntity } from './equipos/equipo.entity';
import { EquipoModule } from './equipos/equipo.module';
import { UsuarioEntity } from './usuario/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Laboratorio } from './laboratory/laboratorio.entity';



@Module({
  imports: [ LaboratoryModule, DamageModule, EquipoModule, UsuarioModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jose',
      password: '2014',
      database: 'yavilab',
      entities: [Laboratorio, DamageEntity, EquipoEntity, UsuarioEntity],
      synchronize: true,
      logging: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
