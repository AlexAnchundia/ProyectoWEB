import "reflect-metadata";
import { DataSource } from "typeorm";
import { HistorialAcceso } from "./Models/HistorialAcceso";
import { MetodoPago }     from "./Models/MetodoPago";
import { Notificacion }   from "./Models/Notificacion";
import { Reclamo }        from "./Models/Reclamo";
import { Verificacion }   from "./Models/Verificacion";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "Cliente",
    synchronize: true,
    logging: false,
    entities: [HistorialAcceso, MetodoPago, Notificacion, Reclamo, Verificacion],
});
