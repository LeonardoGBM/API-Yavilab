import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class ChangeStateLaboratoryDto{
    @IsNotEmpty()
    equipos: BigInteger;
    
    @IsOptional()
    @MinLength(2)
    numeroSerie: BigInteger;

    @IsOptional()
    nombreLab: string;

    @IsOptional()
    monitores: string;

    @IsOptional()
    cpu: string;

    @IsOptional()
    teclado: string;

    @IsOptional()
    audifonos: string;

    @IsOptional()
    infocus: string;

    @IsOptional()
    mouse: string;

    @IsOptional()
    sillas: string;

    @IsOptional()
    mesas: string;

    @IsOptional()
    observaciones: string;

}