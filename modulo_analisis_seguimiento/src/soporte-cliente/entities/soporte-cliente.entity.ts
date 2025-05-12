import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SoporteCliente {
  @PrimaryGeneratedColumn()
  id_soporte: number;

  @Column()
  cliente_id: number;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ length: 50 })
  tipo: string;

  @Column('text')
  mensaje: string;

  @Column({ length: 20 })
  estado: string;
}
