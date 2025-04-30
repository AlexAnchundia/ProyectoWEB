// Interfaces primero
export interface Cliente {
    id: number;
    nombre: string;
    metodosPago: MetodoPago[];
    reclamos: Reclamo[];
    historialAccesos: HistorialAcceso[];
    notificaciones: Notificacion[];
    verificaciones: Verificacion[];
}
export interface MetodoPago {
    id: number;
    tipo: string
    tipoMetodo: string
    nombreTitular: string
    numeroEnmascarado: string
    fechaVencimiento: Date
    direccionFacturacion: string
    monedaPreferida: string
    estado: string
}

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

export interface HistorialAcceso {
    id: number;
    fecha: Date;
    MetodoAutenticacion: string;
    ip: string;
    dispositivo: string;
    descripcion: string;
    estado: string;

}
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

// Datos base
const nombre: string = "Juan Pérez";

const Cliente: Cliente = {
    id: 1,
    nombre,
    metodosPago: [
        { id: 1, tipo: "Crédito", tipoMetodo: "Tarjeta", nombreTitular: "", numeroEnmascarado: "", fechaVencimiento: new Date(), direccionFacturacion: "", monedaPreferida: "", estado: "" },
        { id: 2, tipo: "Digital", tipoMetodo: "Paypal", nombreTitular: "", numeroEnmascarado: "", fechaVencimiento: new Date(), direccionFacturacion: "", monedaPreferida: "", estado: "" },
    ],
    reclamos: [],
    historialAccesos: [],
    notificaciones: [],
    verificaciones: []
};


// ✅ Agregar notificación
Cliente.notificaciones.push({
    id: 1,
    usuarioId: 1,
    tipoNotificacion: "Pedido",
    mensaje: "Tu pedido ha sido enviado",
    fechaEnvio: new Date(),
    leido: false,
    canal: "Email",
    importancia: "Alta"
});



// ✅ Mostrar notificaciones
function mostrarNotificaciones(notificaciones: Notificacion[]): void {
    for (const noti of notificaciones) {
        console.log(`📩 [${noti.leido ? "Leído" : "Nuevo"}] ${noti.mensaje}`);
    }
}

mostrarNotificaciones(Cliente.notificaciones);
