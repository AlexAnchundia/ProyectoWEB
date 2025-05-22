export interface Notificacion {
    id: number;
    usuarioId: number;
    tipoNotificacion: string;
    mensaje: string;
    fechaEnvio: Date;
    leido: boolean;
    canal: string;
    importancia: string;
    
}
