import { EquipoEntity } from 'src/equipos/equipo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'laboratory' })
export class LaboratoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'nombre_lab',
    type: 'varchar',
    length: '50',
    comment: 'El nombre del laboratorio',
  })
  nombre_lab: string;

  @Column({ name: 'monitores' })
  monitores: string;

  @Column()
  cpu: string;

  @Column()
  teclado: string;

  @Column()
  audifonos: string;

  @Column()
  infocus: string;

  @Column()
  mouse: string;

  @Column()
  sillas: string;

  @Column()
  mesas: string;

  @Column()
  observaciones: string;

  @OneToMany(() => EquipoEntity, (equipo) => equipo.laboratory)
  equipos: EquipoEntity[];
}
