import { IsDateString, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSoporteClienteDto {
  @IsInt()
  @IsNotEmpty()
  cliente_id: number;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @MaxLength(50)
  tipo: string; // Ej: "Reclamo", "Consulta", "Sugerencia"

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsString()
  @MaxLength(20)
  estado: string; // Ej: "Abierto", "En proceso", "Cerrado"
}
