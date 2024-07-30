import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'equipo'})
export class EquipoEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    numero_serie: string;

    @Column()
    descripcion_equipo: string;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    estado: string;

    @Column()
    laboratorio: string;

}