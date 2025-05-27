import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incidente } from './entities/incidente.entity';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';

@Injectable()
export class IncidenteService {
  constructor(
    @InjectRepository(Incidente)
    private incidenteRepo: Repository<Incidente>
  ) {}

  create(dto: CreateIncidenteDto) {
    return this.incidenteRepo.save(dto);
  }

  findAll() {
    return this.incidenteRepo.find();
  }

  findOne(id: number) {
    return this.incidenteRepo.findOneBy({ id_incidente: id });
  }

  update(id: number, dto: UpdateIncidenteDto) {
    return this.incidenteRepo.update(id, dto);
  }

  remove(id: number) {
    return this.incidenteRepo.delete(id);
  }
}