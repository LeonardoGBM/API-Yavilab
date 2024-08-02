import { Laboratorio } from "src/laboratory/laboratorio.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToOne(() => Laboratorio)
  @JoinColumn({name: 'laboratorio_id'})
  laboratorio: Laboratorio;
}
