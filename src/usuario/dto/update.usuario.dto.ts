import { PickType } from "@nestjs/swagger";
import { UsuarioDto } from "./usuario.dto";

export class UpdateUsuarioDto extends PickType(UsuarioDto,[
    'nombre',
    'apellido',
    'email',
    'contrasena',
    'rol'
]){

}