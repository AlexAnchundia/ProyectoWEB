export interface HistorialAcceso {
    id: number;
    fecha: Date;
    MetodoAutenticacion: string;
    ip: string;
    dispositivo: string;
    descripcion: string;
    estado: string;
}
