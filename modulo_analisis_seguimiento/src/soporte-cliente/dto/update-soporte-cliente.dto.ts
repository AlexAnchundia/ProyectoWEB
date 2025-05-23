import { PartialType } from '@nestjs/mapped-types';
import { CreateSoporteClienteDto } from './create-soporte-cliente.dto';

export class UpdateSoporteClienteDto extends PartialType(CreateSoporteClienteDto) {}
