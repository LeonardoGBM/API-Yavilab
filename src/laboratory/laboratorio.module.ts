import { Module } from "@nestjs/common";
import { LaboratoryController } from "./laboratorio.controller";
import { LaboratoryService } from "./laboratorio.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Laboratorio } from "./laboratorio.entity";



@Module({
    imports: [TypeOrmModule.forFeature([Laboratorio])],
    controllers: [LaboratoryController],
    providers: [LaboratoryService],
    exports: [TypeOrmModule]
})
export class LaboratoryModule{

}