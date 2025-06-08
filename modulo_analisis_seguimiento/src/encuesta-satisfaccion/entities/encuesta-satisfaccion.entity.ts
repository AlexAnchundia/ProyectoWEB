import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class EncuestaSatisfaccion {
  @PrimaryGeneratedColumn()
  id_encuesta: number;

  @Column()
  alquiler_id: number;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'int' })
  puntuacion: number;

  @Column({ type: 'text', nullable: true })
  comentarios: string;
}
