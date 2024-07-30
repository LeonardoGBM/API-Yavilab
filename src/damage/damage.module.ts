import { Module } from "@nestjs/common";
import { DamageController } from "./damage.controller";
import { DamageEntity } from "./damage.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DamageService } from "./damage.service";

@Module({
    imports: [TypeOrmModule.forFeature([DamageEntity])],
    controllers:[DamageController],
    providers: [ DamageService]
})
export class DamageModule{

}