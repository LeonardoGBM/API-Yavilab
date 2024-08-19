import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EquipoEntity } from "src/equipos/equipo.entity"

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
    lab_nombre: string;

    
    @Column()
    estado: string;

    @ManyToOne(() => EquipoEntity)
    @JoinColumn({ name: 'equipo_id' })
    equipo: EquipoEntity;

}