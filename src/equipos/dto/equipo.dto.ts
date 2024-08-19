import { IsNotEmpty, IsObject, IsOptional } from "class-validator";

export class EquipoDto {
  @IsNotEmpty()
  numero_serie: string;

  @IsNotEmpty()
  descripcion_equipo: string;

  @IsNotEmpty()
  marca: string;

  @IsNotEmpty()
  modelo: string;

  @IsNotEmpty()
  estado: string;

  @IsNotEmpty()
  lab: string;

  @IsOptional()
  laboratorio?: { id: number };
}
