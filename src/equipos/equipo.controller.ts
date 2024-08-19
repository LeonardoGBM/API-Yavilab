import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { EquipoDto } from "./dto/equipo.dto";
import { UpdateEquipoDto } from "./dto/update.equipo";
import { EquipoService } from "./equipo.service";

@ApiTags('Equipo')
@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @ApiOperation({ description: 'Traer equipos', summary: 'Encontrar equipos' })
  @Get()
  async find() {
    return this.equipoService.find();
  }

  @ApiOperation({ description: 'Traer equipo', summary: 'Encontrar equipo' })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.equipoService.findOne(id);
  }

  @ApiOperation({ description: 'Crear equipo', summary: 'Crear equipo' })
  @Post()
  async create(@Body() crearEquipo: EquipoDto) {
    console.log('DTO recibido:', crearEquipo);
    const response = await this.equipoService.create(crearEquipo);
    return response;
  }

  @ApiOperation({ description: 'Actualizar equipo', summary: 'Actualizar equipo' })
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateEquipo: UpdateEquipoDto) {
    return this.equipoService.update(id, updateEquipo);
  }

  @ApiOperation({ description: 'Eliminar equipo', summary: 'Eliminar equipo' })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.equipoService.delete(id);
  }
}
