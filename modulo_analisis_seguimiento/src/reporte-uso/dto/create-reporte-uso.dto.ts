import { IsDateString, IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReporteUsoDto {
  @ApiProperty({
    description: 'Fecha de generación del reporte',
    example: '2025-06-01',
  })
  @IsDateString()
  @IsNotEmpty()
  fecha_generacion: string;

  @ApiProperty({
    description: 'Cantidad total de alquileres en el período',
    example: 120,
    minimum: 0,
  })
  @IsInt()
  @Min(0)
  cantidad_alquileres: number;

  @ApiProperty({
    description: 'Ingresos totales generados en el período (máximo 2 decimales)',
    example: 3540.75,
    minimum: 0,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  ingresos_totales: number;

  @ApiProperty({
    description: 'Cantidad de vehículos disponibles al momento del reporte',
    example: 35,
    minimum: 0,
  })
  @IsInt()
  @Min(0)
  vehiculos_disponibles: number;
}
