import { Module } from '@nestjs/common';
import { ReporteUsoService } from './reporte-uso.service';
import { ReporteUsoController } from './reporte-uso.controller';

@Module({
  controllers: [ReporteUsoController],
  providers: [ReporteUsoService],
})
export class ReporteUsoModule {}
