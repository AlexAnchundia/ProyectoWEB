import { text } from "stream/consumers";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



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

}
