import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Alquiler } from '../../alquiler/entities/alquiler.entity'; // suponer que existe

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
