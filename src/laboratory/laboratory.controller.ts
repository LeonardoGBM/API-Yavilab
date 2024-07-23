import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateLaboratoryDto } from "./dto/create-laboratory.dto";
import { UpdateLaboratoryDto } from "./dto/update-laboratory.dto";

@ApiTags('Laboratory')
@Controller('laboratory')
export class LaboratoryController {

    @ApiOperation({description:'Laboratory traer', summary:'Encontrar laboratorios'})
    @Get()
    find(@Query() query:any){
        return query;
    }

    @ApiOperation({description:'Laboratory traer', summary:'Encontrar laboratorio'})
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return id;
    }

    @ApiOperation({description:'Crear Laboratoryio', summary:'Crear laboratorio'})
    @Post()
    create(@Body() createLaboratoryDto: CreateLaboratoryDto){
        return createLaboratoryDto;
    }

    @ApiOperation({description:'Actualizar libro Laboratorio', summary:'Actualizar laboratorio'})
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