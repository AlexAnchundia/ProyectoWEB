import { Injectable } from '@nestjs/common';
import { CreateReporteUsoDto } from './dto/create-reporte-uso.dto';
import { UpdateReporteUsoDto } from './dto/update-reporte-uso.dto';

@Injectable()
export class ReporteUsoService {
  create(createReporteUsoDto: CreateReporteUsoDto) {
    return 'This action adds a new reporteUso';
  }

  findAll() {
    return `This action returns all reporteUso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reporteUso`;
  }

  update(id: number, updateReporteUsoDto: UpdateReporteUsoDto) {
    return `This action updates a #${id} reporteUso`;
  }

  remove(id: number) {
    return `This action removes a #${id} reporteUso`;
  }
}
