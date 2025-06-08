import { Alquiler } from "src/entity/alquiler.entity";
import { text } from "stream/consumers";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Incidente {
    @PrimaryGeneratedColumn()
    id_incidente: number;

    @Column()
    alquiler_id: number;

    @Column({ type: 'date' })
    fecha: Date

    @Column({length:200})
    descripcion: string;

    @Column({ length: 50 })
    tipo: string;

    @ManyToOne(() => Alquiler, (alquiler) => alquiler.incidente)
    @JoinColumn({ name: 'alquiler_id' })
    alquiler: Alquiler[];

}
