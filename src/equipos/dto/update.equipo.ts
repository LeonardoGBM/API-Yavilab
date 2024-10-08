import { PickType } from "@nestjs/swagger";
import { EquipoDto } from "./equipo.dto";

export class UpdateEquipoDto extends PickType(EquipoDto,[
    'numero_serie',
    'modelo',
    'marca',
    'laboratorio',
    'lab',
    'estado',
    'descripcion_equipo'
]){

}