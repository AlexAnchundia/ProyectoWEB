import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('soportecliente')
export class SoporteCliente {
  @PrimaryGeneratedColumn()
  id_soporte: number;

  @Column()
  cliente_id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.soporte, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente[];

  @Column({ type: 'date' })
  fecha: string;

  @Column({ length: 50 })
  tipo: string;

  @Column('text')
  mensaje: string;

  @Column({ length: 20 })
  estado: string;
}
