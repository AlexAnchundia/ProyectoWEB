import { text } from "stream/consumers";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Incidente {
    @PrimaryGeneratedColumn()
    id_encuesta: number;

    @Column()
    alquiler_id: number;

    @Column({ type: 'text' })
    fecha: Date

    @Column({length:200})
    descripcion: string;

}
