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
import { DamageService } from './damage.service';
import { DamageDto } from './dto/damage.dto';
import { UpdateDamageDto } from './dto/update.laboratory';

@ApiTags('Damage')
@Controller('damage')
export class DamageController {
  constructor(private readonly damageService: DamageService) {}

  @ApiOperation({ description: 'Traer daños', summary: 'Encontrar daños' })
  @Get()
  async find(@Query() query: any) {
    const response = await this.damageService.find();
    return response;
  }
  @ApiOperation({ description: 'Traer daños', summary: 'Encontrar daños' })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const response = await this.damageService.findOne(id);
    return response;
  }
  @ApiOperation({ description: 'Crear Ldaños', summary: 'Crear daños' })
  @Post()
  async create(@Body() createDamage: DamageDto) {
    const response = await this.damageService.create(createDamage);
    return response;
  }
  @ApiOperation({
    description: 'Actualizar daños',
    summary: 'Actualizar daños',
  })
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDamage: UpdateDamageDto,
  ) {
    const response = await this.damageService.update(id, updateDamage);
    return response;
  }

  @ApiOperation({ description: 'Eliminar daños', summary: 'Eliminar daños' })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const response = await this.damageService.delete(id);
    return response;
  }
}
