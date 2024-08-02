import { Module } from "@nestjs/common";
import { EquipoController } from "./equipo.controller";
import { EquipoEntity } from "./equipo.entity";
import { EquipoService } from "./equipo.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaboratoryModule } from "src/laboratory/laboratorio.module";

@Module({
    imports: [TypeOrmModule.forFeature([EquipoEntity]),
    LaboratoryModule
],
    controllers: [ EquipoController ],
    providers: [ EquipoService ],
    exports: [TypeOrmModule]
})
export class EquipoModule{

}