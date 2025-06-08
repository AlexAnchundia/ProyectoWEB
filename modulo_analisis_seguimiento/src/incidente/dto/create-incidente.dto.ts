import {
  IsInt,
  IsNotEmpty,
  IsDateString,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIncidenteDto {
  @ApiProperty({
    description: 'ID del alquiler asociado al incidente',
    example: 123,
  })
  @IsInt()
  @IsNotEmpty()
  alquiler_id: number;

  @ApiProperty({
    description: 'Fecha del incidente en formato ISO',
    example: '2025-06-01T14:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @ApiProperty({
    description: 'Descripción detallada del incidente (máx. 200 caracteres)',
    example: 'El vehículo presentaba fallos en el sistema de frenos.',
    maxLength: 200,
  })
  @IsString()
  @MaxLength(200)
  descripcion: string;

  @ApiProperty({
    description: 'Tipo de incidente (máx. 50 caracteres)',
    example: 'Mecánico',
    maxLength: 50,
  })
  @IsString()
  @MaxLength(50)
  tipo: string;
}
