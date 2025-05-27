import { IsInt, IsNotEmpty, IsDateString, IsString, MaxLength } from 'class-validator';

export class CreateIncidenteDto {
  @IsInt()
  @IsNotEmpty()
  alquiler_id: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @MaxLength(200)
  descripcion: string;

  @IsString()
  @MaxLength(50)
  tipo: string;
}
