import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogSistema } from './entities/log-sistema.entity';
import { CreateLogSistemaDto } from './dto/create-log-sistema.dto';
import { UpdateLogSistemaDto } from './dto/update-log-sistema.dto';

@Injectable()
export class LogSistemaService {
  constructor(
    @InjectRepository(LogSistema)
    private logRepo: Repository<LogSistema>
  ) {}

  create(dto: CreateLogSistemaDto) {
    return this.logRepo.save(dto);
  }

  findAll() {
    return this.logRepo.find();
  }

  findOne(id: number) {
    return this.logRepo.findOneBy({ id_log: id });
  }

  update(id: number, dto: UpdateLogSistemaDto) {
    return this.logRepo.update(id, dto);
  }

  remove(id: number) {
    return this.logRepo.delete(id);
  }
}