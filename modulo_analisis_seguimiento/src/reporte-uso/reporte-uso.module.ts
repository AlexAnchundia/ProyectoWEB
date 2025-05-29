import { Module } from '@nestjs/common';
import { ReporteUsoService } from './reporte-uso.service';
import { ReporteUsoController } from './reporte-uso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReporteUso } from './entities/reporte-uso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReporteUso])],
  exports: [TypeOrmModule],
  controllers: [ReporteUsoController],
  providers: [ReporteUsoService],
})
export class ReporteUsoModule { }
