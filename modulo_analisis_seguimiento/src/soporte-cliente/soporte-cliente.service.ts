import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SoporteCliente } from './entities/soporte-cliente.entity';
import { CreateSoporteClienteDto } from './dto/create-soporte-cliente.dto';
import { UpdateSoporteClienteDto } from './dto/update-soporte-cliente.dto';

@Injectable()
export class SoporteClienteService {
  constructor(
    @InjectRepository(SoporteCliente)
    private soporteRepo: Repository<SoporteCliente>
  ) {}

  create(dto: CreateSoporteClienteDto) {
    return this.soporteRepo.save(dto);
  }

  findAll() {
    return this.soporteRepo.find();
  }

  findOne(id: number) {
    return this.soporteRepo.findOneBy({ id_soporte: id });
  }

  update(id: number, dto: UpdateSoporteClienteDto) {
    return this.soporteRepo.update(id, dto);
  }

  remove(id: number) {
    return this.soporteRepo.delete(id);
  }
}
