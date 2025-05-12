import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ReporteUso {
  @PrimaryGeneratedColumn()
  id_reporte: number;

  @Column({ type: 'date' })
  fecha_generacion: string;

  @Column()
  cantidad_alquileres: number;

  @Column('decimal', { precision: 12, scale: 2 })
  ingresos_totales: number;

  @Column()
  vehiculos_disponibles: number;
}
