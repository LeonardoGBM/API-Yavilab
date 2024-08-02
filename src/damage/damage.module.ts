import { Module } from "@nestjs/common";
import { DamageController } from "./damage.controller";
import { DamageEntity } from "./damage.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DamageService } from "./damage.service";
import { EquipoModule } from "src/equipos/equipo.module";

@Module({
    imports: [TypeOrmModule.forFeature([DamageEntity]),
    EquipoModule
],
    
    controllers:[DamageController],
    providers: [ DamageService],
    exports: [TypeOrmModule]
})
export class DamageModule{

}