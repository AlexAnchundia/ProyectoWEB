import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Reclamo } from "./Reclamo";

@Entity()
export class MetodoPago {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tipo!: string;

    @Column()
    detalles!: string;

    @OneToMany(() => Reclamo, (reclamo) => reclamo.metodoPago)
    reclamos!: Reclamo[];
}
