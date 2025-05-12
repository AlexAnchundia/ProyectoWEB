import { PartialType } from '@nestjs/mapped-types';
import { CreateEncuestaSatisfaccionDto } from './create-encuesta-satisfaccion.dto';

export class UpdateEncuestaSatisfaccionDto extends PartialType(CreateEncuestaSatisfaccionDto) {}
