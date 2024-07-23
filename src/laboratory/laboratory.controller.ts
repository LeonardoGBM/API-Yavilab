import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { LaboratoryDto } from "./dto/laboratory.dto";

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
    findOne(@Param('id') id:number){
        return id;
    }

    @ApiOperation({description:'Crear Laboratoryio', summary:'Crear laboratorio'})
    @Post()
    create(@Body() laboratoryDto: LaboratoryDto){
        return laboratoryDto;
    }

    @ApiOperation({description:'Actualizar libro Laboratorio', summary:'Actualizar laboratorio'})
    @Put(':id')
    update(@Param('id') id:number, @Body() payload:any){
        return {id, body: payload};
    }

    @ApiOperation({description:'Actualizado parcial', summary:'Actualizar laboratorio'})
    @Patch(':id')
    changeState(@Param('id') id:number, @Body() payload:any){
        return {id, payload}
    }

    @ApiOperation({description:'Eliminar laboratorio', summary:'Eliminar laboratorio'})
    @Delete(':id')
    delete(@Param('id') id:number, @Body() payload:any){
        return `reistro eliminado ${id}`;
    }
}  