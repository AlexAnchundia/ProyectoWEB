// alquiler.entity.ts
import { Incidente } from 'src/incidente/entities/incidente.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
// import { Reserva } from './reserva.entity'; // Asegúrate de tener esta entidad creada

@Entity('alquiler')
export class Alquiler {
  @PrimaryGeneratedColumn({ name: 'id_alquiler' })
  id_alquiler: number;

  @Column({ name: 'reserva_id' })
  reserva_id: number;

//   @ManyToOne(() => Reserva)
//   @JoinColumn({ name: 'reserva_id' })
//   reserva: Reserva;

  @OneToMany(() => Incidente, (incidente) => incidente.alquiler)
  incidente: Incidente;

  
  @Column({ name: 'fecha_entrega', type: 'date' })
  fechaEntrega: string;

  @Column({ name: 'fecha_devolucion', type: 'date' })
  fechaDevolucion: string;

  @Column({ name: 'kilometraje_inicial', type: 'int' })
  kilometrajeInicial: number;

  @Column({ name: 'kilometraje_final', type: 'int' })
  kilometrajeFinal: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  total: number;

  

}
