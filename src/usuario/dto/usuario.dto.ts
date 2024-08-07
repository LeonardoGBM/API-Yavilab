import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UsuarioDto {
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  contrasena: string;

  @IsNotEmpty()
  rol: string;
}
