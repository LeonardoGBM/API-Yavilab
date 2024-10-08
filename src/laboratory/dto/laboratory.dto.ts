import { Type } from "class-transformer";
import { IsNotEmpty, MinLength, ValidateNested } from "class-validator";

export class LaboratoryDto {

    @MinLength(3, { message: 'El nombre del laboratorio debe tener mínimo 3 letras' })
    @IsNotEmpty()
    nombre_lab: string;

    @IsNotEmpty()
    monitores: string;

    @IsNotEmpty()
    cpu: string;

    @IsNotEmpty()
    teclado: string;

    @IsNotEmpty()
    audifonos: string;

    @IsNotEmpty()
    infocus: string;

    @IsNotEmpty()
    mouse: string;

    @IsNotEmpty()
    sillas: string;

    @IsNotEmpty()
    mesas: string;

    @IsNotEmpty()
    observaciones: string;

}