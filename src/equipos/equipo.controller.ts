import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { EquipoDto } from "./dto/equipo.dto";
import { UpdateEquipoDto } from "./dto/update.equipo";
import { EquipoService } from "./equipo.service";

@ApiTags('Equipo')
@Controller('equipo')
export class EquipoController {
    constructor( private readonly equipoService:EquipoService){

    }

    @ApiOperation({ description: 'Traer equipos', summary: 'Encontrar equipos' })
    @Get()
    async find(@Query() query: any) {
        const response = await this.equipoService.find();
        return response;
    }

    @ApiOperation({ description: 'Traer equipo', summary: 'Encontrar equipo' })
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id:number ) {
        const response = await this.equipoService.findOne(id);
        return response;
    }

    @ApiOperation({description:'Crear equipo', summary:'Crear equipo'})
    @Post()
    async create(@Body() crearEquipo:EquipoDto){
        const response = await this.equipoService.create(crearEquipo);
        return response;
    }

    @ApiOperation({description:'Actualizar equipo', summary:'Actualizar equipo'})
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateEquipo: UpdateEquipoDto){
        const response = await this.equipoService.update(id, updateEquipo);
        return response;
    }

    @ApiOperation({description:'Eliminar equipo', summary:'Eliminar equipo'})
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id:number){
        const response = await this.equipoService.delete(id);
        return response;
    }
}