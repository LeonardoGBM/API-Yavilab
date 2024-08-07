import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';

import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async registrar({ nombre, apellido, email, contrasena, rol }: UsuarioDto) {
    const usuario = await this.usuarioService.findOneByEmail(email);

    if (usuario) {
      throw new BadRequestException('El usuario ya existe');
    }
    return await this.usuarioService.create({
      nombre,
      apellido,
      email,
      contrasena: await bcryptjs.hash(contrasena, 10),
      rol,
    });
  }

  async login({ email, contrasena }: LoginDto) {
    const usuario = await this.usuarioService.findOneByEmail(email);
    if (!usuario) {
      throw new UnauthorizedException('email no valido');
    }

    const isPasswordValid = await bcryptjs.compare(
      contrasena,
      usuario.contrasena,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('contraseña no valida');
    }

    const payload = { email: usuario.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
    };
  }
}
