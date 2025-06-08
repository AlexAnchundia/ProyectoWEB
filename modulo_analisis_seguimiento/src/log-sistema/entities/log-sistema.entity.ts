import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity('logsistema')
export class LogSistema {
  @ApiProperty({ example: 1, description: 'ID único del log del sistema' })
  @PrimaryGeneratedColumn()
  id_log: number;

  @ApiProperty({ example: 45, description: 'ID del usuario' })
  @Column()
  usuario_id: number;

  @ApiProperty({ example: '2025-06-01T12:00:00Z', description: 'Fecha del log' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @ApiProperty({
    description: 'Acción realizada en formato JSON',
    example: { tipo: 'CREACIÓN', modulo: 'Encuesta de Satisfacción' },
  })
  @Column('json')
  accion: any; // tipo `any` o puedes definir una interfaz

  @ApiProperty({
    example: 'Se creó una nueva encuesta.',
    description: 'Descripción detallada del evento',
  })
  @Column('text')
  descripcion: string;
}
