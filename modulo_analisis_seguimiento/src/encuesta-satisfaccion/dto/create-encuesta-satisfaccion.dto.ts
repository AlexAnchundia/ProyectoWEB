import {
  IsInt,
  IsNotEmpty,
  IsDateString,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEncuestaSatisfaccionDto {
  @ApiProperty({
    description: 'ID del alquiler relacionado con la encuesta',
    example: 101,
  })
  @IsInt()
  @IsNotEmpty()
  alquiler_id: number;

  @ApiProperty({
    description: 'Fecha de la encuesta en formato ISO',
    example: '2025-06-01T15:30:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @ApiProperty({
    description: 'Puntuación de satisfacción (entre 1 y 5)',
    example: 4,
    minimum: 1,
    maximum: 5,
  })
  @IsInt()
  @Min(1)
  @Max(5)
  puntuacion: number;

  @ApiPropertyOptional({
    description: 'Comentarios adicionales del cliente',
    example: 'Excelente servicio, muy satisfecho.',
  })
  @IsOptional()
  comentarios?: string;
}
