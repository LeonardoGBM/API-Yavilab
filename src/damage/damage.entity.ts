import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'damage'})
export class DamageEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero_serie: string;

    @Column({ type: 'time' })
    hora_dano: string;

    @Column()
    fecha_dano: Date;

    @Column()
    fecha_cambio: Date;

    @Column()
    descripcion: string;

    @Column()
    estado: string;

}