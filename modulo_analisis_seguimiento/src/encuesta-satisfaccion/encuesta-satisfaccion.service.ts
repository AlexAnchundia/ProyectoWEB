import { Injectable } from '@nestjs/common';
import { CreateEncuestaSatisfaccionDto } from './dto/create-encuesta-satisfaccion.dto';
import { UpdateEncuestaSatisfaccionDto } from './dto/update-encuesta-satisfaccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EncuestaSatisfaccion } from './entities/encuesta-satisfaccion.entity';

@Injectable()
export class EncuestaSatisfaccionService {
  constructor(
    @InjectRepository(EncuestaSatisfaccion)
    private encuestaRepo: Repository<EncuestaSatisfaccion>,
  ) {}

  create(dto: CreateEncuestaSatisfaccionDto) {
    return this.encuestaRepo.save(dto);
  }

  findAll() {
    return this.encuestaRepo.find();
  }

  findOne(id: number) {
    return this.encuestaRepo.findOneBy({ id_encuesta: id });
  }

  update(id: number, dto: UpdateEncuestaSatisfaccionDto) {
    return this.encuestaRepo.update(id, dto);
  }

  remove(id: number) {
    return this.encuestaRepo.delete(id);
  }
}