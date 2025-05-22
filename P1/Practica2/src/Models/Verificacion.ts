import {Entity,PrimaryGeneratedColumn,Column,OneToOne,OneToMany, JoinColumn} from "typeorm";
import { Reclamo } from "./Reclamo";
import { HistorialAcceso } from "./HistorialAcceso";
import { Exclude } from "class-transformer";
import { join } from "path";

@Entity()
export class Verificacion {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    estado!: string;

    @OneToOne(() => Reclamo, (reclamo) => reclamo.verificacion)
    @JoinColumn()
    reclamo!: Reclamo;

    @OneToMany(() => HistorialAcceso, (acceso) => acceso.verificacion)
    accesos!: HistorialAcceso[];
}
