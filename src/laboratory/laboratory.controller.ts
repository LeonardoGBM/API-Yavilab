import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateLaboratoryDto } from "./dto/update-laboratory.dto";
import { LaboratoryDto } from "./dto/laboratory.dto";
import { LaboratoryService } from "./laboratory.service";

@ApiTags('Laboratory')
@Controller('laboratory')
export class LaboratoryController {
    constructor( private readonly laboratoryService:LaboratoryService){

    }
    @ApiOperation({description:'Traer laboratorios', summary:'Encontrar laboratorios'})
    @Get()
    async find(@Query() query:any){
        const response = await this.laboratoryService.find();
        return  response;
    }

    @ApiOperation({description:'Traer laboratorio', summary:'Encontrar laboratorio'})
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id:number){
        const response = await this.laboratoryService.findOne(id);
        return response;
    }

    @ApiOperation({description:'Crear Laboratoryio', summary:'Crear laboratorio'})
    @Post()
    async create(@Body() createLaboratoryDto: LaboratoryDto){
        const response = await this.laboratoryService.create(createLaboratoryDto)
        return response;
    }

    @ApiOperation({description:'Actualizar Laboratorio', summary:'Actualizar laboratorio'})
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() updateLaboratoryDto: UpdateLaboratoryDto){
        const response = await this.laboratoryService.update(id, updateLaboratoryDto)
        return response;
    }

    @ApiOperation({description:'Actualizado parcial', summary:'Actualizar laboratorio'})
    @Patch(':id')
    changeState(@Param('id', ParseIntPipe) id:number, @Body() updateLaboratoryDto: UpdateLaboratoryDto){
        return {id, body: updateLaboratoryDto};
    }

    @ApiOperation({description:'Eliminar laboratorio', summary:'Eliminar laboratorio'})
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id:number){
        const response = await this.laboratoryService.delete(id)
        return response;
    }
}  