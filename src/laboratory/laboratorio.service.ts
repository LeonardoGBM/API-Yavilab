import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { LaboratoryDto } from "./dto/laboratory.dto";
import { UpdateLaboratoryDto } from "./dto/update-laboratory.dto";
import { Laboratorio } from "./laboratorio.entity";

@Injectable()
export class LaboratoryService {

  constructor(
    @InjectRepository(Laboratorio)
    private laboratoryRepository: Repository<Laboratorio>,
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

  async create(payload: LaboratoryDto): Promise<Laboratorio> {
    const newLaboratory = this.laboratoryRepository.create(payload);
    return await this.laboratoryRepository.save(newLaboratory);
  }
  
  async update(id: number, payload: UpdateLaboratoryDto) {
    const laboratory = await this.findOne(id);
  
    if (!laboratory) {
      throw new NotFoundException({ message: 'Laboratorio no encontrado', error: 'No encontrado' });
    }
  
    // Update only the fields that are present in the payload
    Object.assign(laboratory, payload);
  
    await this.laboratoryRepository.save(laboratory);
    return laboratory;
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