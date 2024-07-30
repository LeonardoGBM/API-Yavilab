import { IsNotEmpty, MinLength } from "class-validator";

export class EquipoDto{

    @MinLength(3, { message: 'El nombre del laboratorio debe tener mínimo 3 letras' })
    @IsNotEmpty()
    numero_serie: string;

    @IsNotEmpty()
    descripcion_equipo: string;

    @IsNotEmpty()
    marca: string;

    @IsNotEmpty()
    modelo:string;
    
    @IsNotEmpty()
    estado: string;

    @IsNotEmpty()
    laboratorio: string;

}