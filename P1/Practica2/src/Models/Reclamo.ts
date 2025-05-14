import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToOne,OneToMany,JoinColumn, CreateDateColumn,} from "typeorm";
import { MetodoPago } from "./MetodoPago";
import { Verificacion } from "./Verificacion";
import { Notificacion } from "./Notificacion";

@Entity()
export class Reclamo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descripcion!: string;

    @CreateDateColumn()
    fecha!: Date;

    @ManyToOne(() => MetodoPago, metodo => metodo.reclamos)
    metodoPago!: MetodoPago;

    @OneToOne(() => Verificacion, verif => verif.reclamo)
    @JoinColumn()
    verificacion!: Verificacion;

    @OneToMany(() => Notificacion, noti => noti.reclamo)
    notificaciones!: Notificacion[];

}
