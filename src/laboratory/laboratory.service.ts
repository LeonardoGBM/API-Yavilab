import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LaboratoryEntity } from "./laboratory.entity";
import { LaboratoryDto } from "./dto/laboratory.dto";
import { UpdateLaboratoryDto } from "./dto/update-laboratory.dto";

@Injectable()
export class LaboratoryService {

  constructor(
    @InjectRepository(LaboratoryEntity)
    private laboratoryRepository: Repository<LaboratoryEntity>,
  ) { }


  async find() {
    const laboratory = await this.laboratoryRepository.find();
    return laboratory
  }


  async findOne(id: number) {
    const laboratoryid = await this.laboratoryRepository.findOne({ where: { id: id } });

    if (laboratoryid === null) {
      throw new NotFoundException({ message:'Laboratorio no encontrado', error:'No encontrado'});
    }

    return laboratoryid;
  }

  async create(payload: LaboratoryDto) {
    const newLaboratory = this.laboratoryRepository.create()
    newLaboratory.nombre_lab = payload.nombre_lab;
    newLaboratory.monitores = payload.monitores;
    newLaboratory.cpu = payload.cpu;
    newLaboratory.teclado = payload.teclado;
    newLaboratory.audifonos = payload.audifonos;
    newLaboratory.mouse = payload.mouse;
    newLaboratory.infocus = payload.infocus;
    newLaboratory.sillas = payload.sillas;
    newLaboratory.mesas = payload.mesas;
    newLaboratory.observaciones = payload.observaciones;

    const response = await this.laboratoryRepository.save(newLaboratory);
    return response;
  }


  async update(id: number, payload: UpdateLaboratoryDto) {
    const Laboratory = await this.findOne(id)

    if (Laboratory === null) {
      throw new NotFoundException({ message:'Laboratorio no encontrado', error:'No encontrado'});
    }

    Laboratory.nombre_lab = payload.nombre_lab;
    Laboratory.monitores = payload.monitores;
    Laboratory.cpu = payload.cpu;
    Laboratory.teclado = payload.teclado;
    Laboratory.audifonos = payload.audifonos;
    Laboratory.mouse = payload.mouse;
    Laboratory.infocus = payload.infocus;
    Laboratory.sillas = payload.sillas;
    Laboratory.mesas = payload.mesas;
    Laboratory.observaciones = payload.observaciones;

    const response = await this.laboratoryRepository.update(id, Laboratory);
    return response;
  }

  
  async delete(id: number) {
    const Laboratory = await this.findOne(id)

    if (Laboratory === null) {
      throw new NotFoundException({ message:'Laboratorio no encontrado', error:'No encontrado'});
    }
    const response = await this.laboratoryRepository.delete(id);
    return response;
  }
}