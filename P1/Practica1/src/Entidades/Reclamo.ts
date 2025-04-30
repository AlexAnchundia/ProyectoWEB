export interface Reclamo {
    id: number;
    usuarioId: number;
    fechaReclamo: Date;
    tipoReclamo: string;
    descripcion: string;
    estado: string;
    respuesta: string;
    fechaRespuesta: Date;
    prioridad: string;
    
}
