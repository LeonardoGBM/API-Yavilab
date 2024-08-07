import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('registrar')
  registrar(
    @Body()
    UsuarioDto: UsuarioDto,
  ) {
    return this.authService.registrar(UsuarioDto);
  }

  @Post('login')
  login(
    @Body()
    LoginDto: LoginDto,
  ) {
    return this.authService.login(LoginDto);
  }
}
