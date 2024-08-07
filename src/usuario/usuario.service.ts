import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import { UsuarioDto } from './dto/usuario.dto';
import { UpdateUsuarioDto } from './dto/update.usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  findOneByEmail(email: string) {
    return this.usuarioRepository.findOneBy({ email });
  }

  async find() {
    const usuario = await this.usuarioRepository.find();
    return usuario;
  }

  async findOne(id: number) {
    const usuarioid = await this.usuarioRepository.findOne({
      where: { id: id },
    });

    if (usuarioid === null) {
      throw new NotFoundException({
        message: 'Usuario no encontrado',
        error: 'No encontrado',
      });
    }

    return usuarioid;
  }

  async create(payload: UsuarioDto) {
    const newUsuario = this.usuarioRepository.create();
    newUsuario.nombre = payload.nombre;
    newUsuario.apellido = payload.apellido;
    newUsuario.email = payload.email;
    newUsuario.contrasena = payload.contrasena;
    newUsuario.rol = payload.rol;

    const response = await this.usuarioRepository.save(newUsuario);
    return response;
  }

  async update(id: number, payload: UpdateUsuarioDto) {
    const Usuario = await this.findOne(id);

    if (Usuario === null) {
      throw new NotFoundException({
        message: 'Usuario no encontrado',
        error: 'No encontrado',
      });
    }

    Usuario.nombre = payload.nombre;
    Usuario.apellido = payload.apellido;
    Usuario.email = payload.email;
    Usuario.contrasena = payload.contrasena;
    Usuario.rol = payload.rol;

    const response = await this.usuarioRepository.update(id, Usuario);
    return response;
  }

  async delete(id: number) {
    const Usuario = await this.findOne(id);

    if (Usuario === null) {
      throw new NotFoundException({
        message: 'Laboratorio no encontrado',
        error: 'No encontrado',
      });
    }
    const response = await this.usuarioRepository.delete(id);
    return response;
  }
}
