import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateLaboratoryDto } from "./dto/update-laboratory.dto";
import { LaboratoryDto } from "./dto/laboratory.dto";

@ApiTags('Laboratory')
@Controller('laboratory')
export class LaboratoryController {

    @ApiOperation({description:'Traer laboratorios', summary:'Encontrar laboratorios'})
    @Get()
    find(@Query() query:any){

        return  query;
    }

    @ApiOperation({description:'Traer laboratorio', summary:'Encontrar laboratorio'})
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return id;
    }

    @ApiOperation({description:'Crear Laboratoryio', summary:'Crear laboratorio'})
    @Post()
    create(@Body() createLaboratoryDto: LaboratoryDto){
        return createLaboratoryDto;
    }

    @ApiOperation({description:'Actualizar Laboratorio', summary:'Actualizar laboratorio'})
    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() updateLaboratoryDto: UpdateLaboratoryDto){
        return {id, body: updateLaboratoryDto};
    }

    @ApiOperation({description:'Actualizado parcial', summary:'Actualizar laboratorio'})
    @Patch(':id')
    changeState(@Param('id', ParseIntPipe) id:number, @Body() updateLaboratoryDto: UpdateLaboratoryDto){
        return {id, body: updateLaboratoryDto};
    }

    @ApiOperation({description:'Eliminar laboratorio', summary:'Eliminar laboratorio'})
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number, @Body() payload:any){
        return `reistro eliminado ${id}`;
    }
}  