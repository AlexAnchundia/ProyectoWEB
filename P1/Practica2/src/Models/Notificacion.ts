import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Reclamo } from "./Reclamo";
import { join } from "path";

@Entity()
export class Notificacion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    mensaje!:string;

    @Column()
    enviadaEn!: Date;

    @ManyToOne(() => Reclamo, (reclamo) => reclamo.notificaciones)
    @JoinColumn()
    reclamo!: Reclamo;
}