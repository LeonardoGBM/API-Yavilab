import { Injectable, NotFoundException } from '@nestjs/common';
import { DamageEntity } from './damage.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateDamageDto } from './dto/update.laboratory';
import { DamageDto } from './dto/damage.dto';

@Injectable()
export class DamageService {
  constructor(
    @InjectRepository(DamageEntity)
    private damageRepository: Repository<DamageEntity>,
  ) {}

  async find() {
    const damage = await this.damageRepository.find();
    return damage;
  }

  async findOne(id: number) {
    const damageid = await this.damageRepository.findOne({ where: { id: id } });

    if (damageid === null) {
      throw new NotFoundException({
        message: 'Daño no encontrado',
        error: 'No encontrado',
      });
    }

    return damageid;
  }

  async create(payload: DamageDto) {
    const newDamage = this.damageRepository.create();
    newDamage.numero_serie = payload.numero_serie;
    newDamage.hora_dano = payload.hora_dano;
    newDamage.fecha_dano = payload.fecha_dano;
    newDamage.fecha_cambio = payload.fecha_cambio;
    newDamage.descripcion = payload.descripcion;
    newDamage.estado = payload.estado;

    const response = await this.damageRepository.save(newDamage);
    return response;
  }

  async update(id: number, payload: UpdateDamageDto) {
    const Damage = await this.findOne(id);

    if (Damage === null) {
      throw new NotFoundException({
        message: 'Daño no encontrado',
        error: 'No encontrado',
      });
    }

    Damage.numero_serie = payload.numero_serie;
    Damage.hora_dano = payload.hora_dano;
    Damage.fecha_dano = payload.fecha_dano;
    Damage.fecha_cambio = payload.fecha_cambio;
    Damage.descripcion = payload.descripcion;
    Damage.estado = payload.estado;

    const response = await this.damageRepository.update(id, Damage);
    return response;
  }

  async delete(id: number) {
    const Damage = await this.findOne(id);

    if (Damage === null) {
      throw new NotFoundException({
        message: 'Daño no encontrado',
        error: 'No encontrado',
      });
    }
    const response = await this.damageRepository.delete(id);
    return response;
  }
}
