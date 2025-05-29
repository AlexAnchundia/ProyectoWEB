import { Module } from '@nestjs/common';
import { SoporteClienteService } from './soporte-cliente.service';
import { SoporteClienteController } from './soporte-cliente.controller';
import { SoporteCliente } from './entities/soporte-cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SoporteCliente])],
  exports: [TypeOrmModule],
  controllers: [SoporteClienteController],
  providers: [SoporteClienteService],
})
export class SoporteClienteModule { }
