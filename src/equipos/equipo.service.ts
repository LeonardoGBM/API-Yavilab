import { Injectable, NotFoundException } from "@nestjs/common";
import { EquipoEntity } from "./equipo.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { EquipoDto } from "./dto/equipo.dto";
import { UpdateEquipoDto } from "./dto/update.equipo";

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(EquipoEntity)
    private equipoRepository: Repository<EquipoEntity>,
  ) { }


  async find() {
    const equipo = await this.equipoRepository.find();
    return equipo
  }


  async findOne(id: number) {
    const equipoid = await this.equipoRepository.findOne({ where: { id: id } });

    if (equipoid === null) {
      throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
    }

    return equipoid;
  }

  async create(payload: EquipoDto) {
    const newEquipo = this.equipoRepository.create()
    newEquipo.numero_serie = payload.numero_serie;
    newEquipo.descripcion_equipo = payload.descripcion_equipo;
    newEquipo.marca = payload.marca;
    newEquipo.modelo = payload.modelo;
    newEquipo.estado = payload.estado;
    newEquipo.laboratorio = payload.laboratorio;

    const response = await this.equipoRepository.save(newEquipo);
    return response;
  }


  async update(id: number, payload: UpdateEquipoDto) {
    const Equipo = await this.findOne(id)

    if (Equipo === null) {
      throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
    }

    Equipo.numero_serie = payload.numero_serie;
    Equipo.descripcion_equipo = payload.descripcion_equipo;
    Equipo.marca = payload.marca;
    Equipo.modelo = payload.modelo;
    Equipo.estado = payload.estado;
    Equipo.laboratorio = payload.laboratorio;

    const response = await this.equipoRepository.update(id, Equipo);
    return response;
  }


  async delete(id: number) {
    const Equipo = await this.findOne(id)

    if (Equipo === null) {
      throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
    }
    const response = await this.equipoRepository.delete(id);
    return response;
  }
}