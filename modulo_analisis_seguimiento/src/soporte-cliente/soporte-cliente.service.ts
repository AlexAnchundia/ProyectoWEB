import { Injectable } from '@nestjs/common';
import { CreateSoporteClienteDto } from './dto/create-soporte-cliente.dto';
import { UpdateSoporteClienteDto } from './dto/update-soporte-cliente.dto';

@Injectable()
export class SoporteClienteService {
  create(createSoporteClienteDto: CreateSoporteClienteDto) {
    return 'This action adds a new soporteCliente';
  }

  findAll() {
    return `This action returns all soporteCliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soporteCliente`;
  }

  update(id: number, updateSoporteClienteDto: UpdateSoporteClienteDto) {
    return `This action updates a #${id} soporteCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} soporteCliente`;
  }
}
