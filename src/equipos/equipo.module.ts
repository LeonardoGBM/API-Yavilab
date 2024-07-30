import { Module } from "@nestjs/common";
import { EquipoController } from "./equipo.controller";
import { EquipoEntity } from "./equipo.entity";
import { EquipoService } from "./equipo.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([EquipoEntity])],
    controllers: [ EquipoController ],
    providers: [ EquipoService ]
})
export class EquipoModule{

}