import { IsNotEmpty, MinLength } from "class-validator";

export class LaboratoryDto{

    @MinLength(3, {message: 'El nombre del laboratorio debe tener mínimo 3 letras'})
    @IsNotEmpty()
    nombreLab: string;

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