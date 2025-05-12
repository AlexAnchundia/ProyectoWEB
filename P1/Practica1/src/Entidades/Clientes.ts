import { MetodoPago, Reclamo, HistorialAcceso, Notificacion, Verificacion } from "..";

export interface Cliente {
    id: number;
    nombre: string;
    metodosPago: MetodoPago[];
    reclamos: Reclamo[];
    historialAccesos: HistorialAcceso[];
    notificaciones: Notificacion[];
    Verificacion: Verificacion[];
}
