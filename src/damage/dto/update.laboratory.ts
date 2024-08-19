import { PickType } from "@nestjs/swagger";
import { DamageDto } from "./damage.dto";

export class UpdateDamageDto extends PickType(DamageDto,[
    'numero_serie',
    'hora_dano',
    'fecha_dano',
    'fecha_cambio',
    'lab_nombre',
    'descripcion',
    'estado',
    'equipo'
]){

}