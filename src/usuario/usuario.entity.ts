import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'usuario'})
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    contrasena: string;

    @Column()
    rol: string;

}