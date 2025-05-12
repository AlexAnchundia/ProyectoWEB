import { IsDateString, IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateReporteUsoDto {
  @IsDateString()
  @IsNotEmpty()
  fecha_generacion: string;

  @IsInt()
  @Min(0)
  cantidad_alquileres: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  ingresos_totales: number;

  @IsInt()
  @Min(0)
  vehiculos_disponibles: number;
}
