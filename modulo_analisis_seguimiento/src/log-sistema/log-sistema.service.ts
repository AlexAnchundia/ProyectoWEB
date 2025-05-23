import { Injectable } from '@nestjs/common';
import { CreateLogSistemaDto } from './dto/create-log-sistema.dto';
import { UpdateLogSistemaDto } from './dto/update-log-sistema.dto';

@Injectable()
export class LogSistemaService {
  create(createLogSistemaDto: CreateLogSistemaDto) {
    return 'This action adds a new logSistema';
  }

  findAll() {
    return `This action returns all logSistema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logSistema`;
  }

  update(id: number, updateLogSistemaDto: UpdateLogSistemaDto) {
    return `This action updates a #${id} logSistema`;
  }

  remove(id: number) {
    return `This action removes a #${id} logSistema`;
  }
}
