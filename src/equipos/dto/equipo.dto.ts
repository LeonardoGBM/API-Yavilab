import { IsNotEmpty, IsObject, MinLength } from "class-validator";
import { LaboratoryDto } from "src/laboratory/dto/laboratory.dto";

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

    @IsNotEmpty()
    @IsObject()
    laboratory: LaboratoryDto; // 

}