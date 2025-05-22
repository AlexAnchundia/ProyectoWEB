import { PartialType } from '@nestjs/mapped-types';
import { CreateReporteUsoDto } from './create-reporte-uso.dto';

export class UpdateReporteUsoDto extends PartialType(CreateReporteUsoDto) {}
