import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Verificacion } from "./Verificacion";

@Entity()
export class HistorialAcceso {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    ip!: string;

    @Column()
    fechaAcceso!: Date;

    @ManyToOne(() => Verificacion, (verificacion) => verificacion.accesos)
    verificacion!: Verificacion;
}
