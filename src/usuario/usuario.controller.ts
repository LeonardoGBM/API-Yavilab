import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsuarioDto } from './dto/usuario.dto';
import { UpdateUsuarioDto } from './dto/update.usuario.dto';
import { UsuarioService } from './usuario.service';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({
    description: 'Traer usuarios',
    summary: 'Encontrar usuarios',
  })
  @Get()
  async find(@Query() query: any) {
    const response = await this.usuarioService.find();
    return response;
  }

  @ApiOperation({ description: 'Traer usuario', summary: 'Encontrar usuario' })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const response = await this.usuarioService.findOne(id);
    return response;
  }

  @ApiOperation({ description: 'Crear usuario', summary: 'Crear usuario' })
  @Post()
  async create(@Body() createUsuario: UsuarioDto) {
    const response = await this.usuarioService.create(createUsuario);
    return response;
  }

  @ApiOperation({
    description: 'Actualizar usuario',
    summary: 'Actualizar usuario',
  })
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuario: UpdateUsuarioDto,
  ) {
    const response = await this.usuarioService.update(id, updateUsuario);
    return response;
  }

  @ApiOperation({
    description: 'Eliminar usuario',
    summary: 'Eliminar usuario',
  })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const response = await this.usuarioService.delete(id);
    return response;
  }
}
