import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

@Entity('logsistema')
export class LogSistema {

    @PrimaryGeneratedColumn()
    id_log: number;

    @Column()
    usuario_id: number; //GUARDA ID RECIBIDO DEL ENDPOINT DE ADMINISTRACION INTERNA

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha: Date

    @Column('text')
    accion: JSON;

    @Column('text')
    descripcion: string;

}