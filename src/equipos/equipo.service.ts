import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EquipoEntity } from "./equipo.entity";
import { EquipoDto } from "./dto/equipo.dto";
import { UpdateEquipoDto } from "./dto/update.equipo";
import { Laboratorio } from "src/laboratory/laboratorio.entity";

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(EquipoEntity)
    private equipoRepository: Repository<EquipoEntity>,

    @InjectRepository(Laboratorio)
    private laboratorioRepository: Repository<Laboratorio>,
  ) {}

  async find() {
    return this.equipoRepository.find({ relations: ['laboratorio'] });
  }

  async findOne(id: number) {
    const equipo = await this.equipoRepository.findOne({ where: { id }, relations: ['laboratorio'] });

    if (!equipo) {
      throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
    }

    return equipo;
  }

  async create(payload: EquipoDto): Promise<EquipoEntity> {
    // Primero, verifica si el laboratorio existe
    if (payload.laboratorio) {
      const laboratorio = await this.laboratorioRepository.findOne({ where: { id: payload.laboratorio.id } });
  
      if (!laboratorio) {
        throw new NotFoundException({ message: 'Laboratorio no encontrado', error: 'No encontrado' });
      }
  
      // Crea una nueva entidad de equipo con la relación de laboratorio
      const newEquipo = this.equipoRepository.create({
        ...payload,
        laboratorio: laboratorio
      });
  
      // Guarda el nuevo equipo en la base de datos
      return await this.equipoRepository.save(newEquipo);
    } else {
      // Si no se proporciona un laboratorio, solo crea el equipo sin la relación
      const newEquipo = this.equipoRepository.create(payload);
      return await this.equipoRepository.save(newEquipo);
    }
  }
  

  async update(id: number, payload: UpdateEquipoDto) {
    const equipo = await this.findOne(id);

    if (!equipo) {
      throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
    }

    if (payload.laboratorio) {
      const laboratorio = await this.laboratorioRepository.findOne({ where: { id: payload.laboratorio.id } });
      if (!laboratorio) {
        throw new NotFoundException({ message: 'Laboratorio no encontrado', error: 'No encontrado' });
      }
      equipo.laboratorio = laboratorio;
    }

    // Merges the updated fields from payload into the existing equipo entity
    this.equipoRepository.merge(equipo, payload);
    return this.equipoRepository.save(equipo);
  }

  async delete(id: number) {
    const equipo = await this.findOne(id);

    if (!equipo) {
      throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
    }

    return this.equipoRepository.delete(id);
  }
}
