import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class DamageDto {
  @IsNotEmpty()
  numero_serie: string;

  @IsString()
  @IsNotEmpty()
  hora_dano: string;

  @IsNotEmpty()
  fecha_dano: Date;

  @IsNotEmpty()
  fecha_cambio: Date;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  lab_nombre: string;

  @IsOptional()
  equipo?: { id: number }; // Es opcional y contiene solo el id
}
