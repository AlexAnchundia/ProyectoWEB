import { Module } from '@nestjs/common';
import { IncidenteService } from './incidente.service';
import { IncidenteController } from './incidente.controller';
import { Incidente } from './entities/incidente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alquiler } from 'src/entity/alquiler.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Incidente, Alquiler])],
  exports: [TypeOrmModule],
  controllers: [IncidenteController],
  providers: [IncidenteService],
})
export class IncidenteModule { }
