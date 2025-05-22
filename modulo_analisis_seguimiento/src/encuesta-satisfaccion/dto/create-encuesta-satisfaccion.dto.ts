import { IsInt, IsNotEmpty, IsDateString, IsOptional, Min, Max } from 'class-validator';

export class CreateEncuestaSatisfaccionDto {
  @IsInt()
  @IsNotEmpty()
  alquiler_id: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsInt()
  @Min(1)
  @Max(5)
  puntuacion: number;

  @IsOptional()
  comentarios?: string;
}
