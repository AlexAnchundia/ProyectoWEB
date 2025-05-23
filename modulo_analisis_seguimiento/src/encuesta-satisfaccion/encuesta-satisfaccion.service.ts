import { Injectable } from '@nestjs/common';
import { CreateEncuestaSatisfaccionDto } from './dto/create-encuesta-satisfaccion.dto';
import { UpdateEncuestaSatisfaccionDto } from './dto/update-encuesta-satisfaccion.dto';

@Injectable()
export class EncuestaSatisfaccionService {
  create(createEncuestaSatisfaccionDto: CreateEncuestaSatisfaccionDto) {
    return 'This action adds a new encuestaSatisfaccion';
  }

  findAll() {
    return `This action returns all encuestaSatisfaccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encuestaSatisfaccion`;
  }

  update(id: number, updateEncuestaSatisfaccionDto: UpdateEncuestaSatisfaccionDto) {
    return `This action updates a #${id} encuestaSatisfaccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} encuestaSatisfaccion`;
  }
}
