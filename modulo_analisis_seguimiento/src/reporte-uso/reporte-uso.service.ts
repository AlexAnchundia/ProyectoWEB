import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReporteUso } from './entities/reporte-uso.entity';
import { CreateReporteUsoDto } from './dto/create-reporte-uso.dto';
import { UpdateReporteUsoDto } from './dto/update-reporte-uso.dto';

@Injectable()
export class ReporteUsoService {
  constructor(
    @InjectRepository(ReporteUso)
    private reporteRepo: Repository<ReporteUso>
  ) {}

  create(dto: CreateReporteUsoDto) {
    return this.reporteRepo.save(dto);
  }

  findAll() {
    return this.reporteRepo.find();
  }

  findOne(id: number) {
    return this.reporteRepo.findOneBy({ id_reporte: id });
  }

  update(id: number, dto: UpdateReporteUsoDto) {
    return this.reporteRepo.update(id, dto);
  }

  remove(id: number) {
    return this.reporteRepo.delete(id);
  }
}