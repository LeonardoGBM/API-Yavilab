import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { DamageService } from "./damage.service";
import { DamageDto } from "./dto/damage.dto";
import { UpdateDamageDto } from "./dto/update.laboratory";

@ApiTags('Damage')
@Controller('damage')
export class DamageController {
  constructor(private readonly damageService: DamageService) {}

  @ApiOperation({ description: 'Traer daños', summary: 'Encontrar daños' })
  @Get()
  async find() {
    return this.damageService.find();
  }

  @ApiOperation({ description: 'Traer daño', summary: 'Encontrar daño' })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.damageService.findOne(id);
  }

  @ApiOperation({ description: 'Crear daño', summary: 'Crear daño' })
  @Post()
  async create(@Body() createDamage: DamageDto) {
    return this.damageService.create(createDamage);
  }

  @ApiOperation({ description: 'Actualizar daño', summary: 'Actualizar daño' })
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateDamage: UpdateDamageDto) {
    return this.damageService.update(id, updateDamage);
  }

  @ApiOperation({ description: 'Eliminar daño', summary: 'Eliminar daño' })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.damageService.delete(id);
  }
}
