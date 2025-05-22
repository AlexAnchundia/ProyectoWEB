export interface Verificacion {
    id: number;
    usuarioId: number;
    tipo: 'identidad' | 'email' | 'telefono' | 'documento';
    codigoVerificacion?: string;
    documentoUrl?: string;
    estado: 'pendiente' | 'aprobado' | 'rechazado';
    fechaSolicitud: Date;
    fechaVerificacion?: Date;
    motivoRechazo?: string;
    verificadoPor?: string;
    prioridad?: 'baja' | 'media' | 'alta';
}
