import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class DamageDto {
  @MinLength(3, {
    message: 'El número de serie debe contener al menos 3 caracteres',
  })
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
  estado: string;
}
