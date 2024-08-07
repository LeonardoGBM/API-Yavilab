import { LaboratoryEntity } from 'src/laboratory/laboratory.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'equipo' })
export class EquipoEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => LaboratoryEntity, (laboratorio) => laboratorio.equipos)
  @JoinColumn({ name: 'laboratorio_id' })
  laboratory: LaboratoryEntity;
}
