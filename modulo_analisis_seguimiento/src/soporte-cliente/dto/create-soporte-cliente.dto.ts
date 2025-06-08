import { IsDateString, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSoporteClienteDto {
  @ApiProperty({
    description: 'ID del cliente que genera el soporte',
    example: 101,
  })
  @IsInt()
  @IsNotEmpty()
  cliente_id: number;

  @ApiProperty({
    description: 'Fecha del registro del soporte',
    example: '2025-06-01',
  })
  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @ApiProperty({
    description: 'Tipo de soporte: Reclamo, Consulta o Sugerencia',
    example: 'Reclamo',
    maxLength: 50,
  })
  @IsString()
  @MaxLength(50)
  tipo: string;

  @ApiProperty({
    description: 'Mensaje detallado enviado por el cliente',
    example: 'El vehículo alquilado tenía fallas en el aire acondicionado.',
  })
  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @ApiProperty({
    description: 'Estado del soporte: Abierto, En proceso o Cerrado',
    example: 'Abierto',
    maxLength: 20,
  })
  @IsString()
  @MaxLength(20)
  estado: string;
}
