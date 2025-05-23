import { Module } from '@nestjs/common';
import { SoporteClienteService } from './soporte-cliente.service';
import { SoporteClienteController } from './soporte-cliente.controller';

@Module({
  controllers: [SoporteClienteController],
  providers: [SoporteClienteService],
})
export class SoporteClienteModule {}
