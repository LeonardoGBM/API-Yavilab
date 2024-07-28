import { PickType } from "@nestjs/swagger";
import { LaboratoryDto } from "./laboratory.dto";

export class UpdateLaboratoryDto extends PickType(LaboratoryDto,[
    'nombre_lab',
    'monitores',
    'cpu',
    'teclado',
    'audifonos',
    'infocus',
    'mouse',
    'sillas',
    'mesas'
]){}