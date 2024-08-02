import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DamageEntity } from "./damage.entity";
import { DamageDto } from "./dto/damage.dto";
import { UpdateDamageDto } from "./dto/update.laboratory";
import { EquipoEntity } from "src/equipos/equipo.entity";

@Injectable()
export class DamageService {
  constructor(
    @InjectRepository(DamageEntity)
    private damageRepository: Repository<DamageEntity>,

    @InjectRepository(EquipoEntity)
    private equipoRepository: Repository<EquipoEntity>,
  ) {}


  async find() {
    return this.damageRepository.find({ relations: ['equipo'] });
    
  }

  async findOne(id: number) {
    const damage = await this.damageRepository.findOne({
      where: { id },
      relations: ['equipo'],
    });

    if (!damage) {
      throw new NotFoundException({ message: 'Daño no encontrado', error: 'No encontrado' });
    }

    return damage;
  }

  async create(payload: DamageDto) {
    let equipo: EquipoEntity | undefined;

    if (payload.equipo) {
      equipo = await this.equipoRepository.findOne({ where: { id: payload.equipo.id } });

      if (!equipo) {
        throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
      }
    }

    const newDamage = this.damageRepository.create({
      ...payload,
      equipo: equipo || null, // Asigna el equipo si existe, o null si no está definido
    });

    return this.damageRepository.save(newDamage);
  }

  async update(id: number, payload: UpdateDamageDto) {
    const damage = await this.findOne(id);

    if (payload.equipo) {
      const equipo = await this.equipoRepository.findOne({ where: { id: payload.equipo.id } });
      if (!equipo) {
        throw new NotFoundException({ message: 'Equipo no encontrado', error: 'No encontrado' });
      }
      damage.equipo = equipo;
    }

    this.damageRepository.merge(damage, payload);
    return this.damageRepository.save(damage);
  }

  async delete(id: number) {
    const damage = await this.findOne(id);

    if (!damage) {
      throw new NotFoundException({ message: 'Daño no encontrado', error: 'No encontrado' });
    }

    return this.damageRepository.delete(id);
  }
}
