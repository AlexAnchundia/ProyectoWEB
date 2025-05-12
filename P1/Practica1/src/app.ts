import { Cliente } from "./Entidades/Clientes";
import { MetodoPago } from "./Entidades/MetodoPago";
import { Reclamo } from "./Entidades/Reclamo";
import { HistorialAcceso } from "./Entidades/HistorialAcceso";
import { Notificacion } from "./Entidades/Notificacion";
import { Verificacion } from "./Entidades/Verificacion";


const nombreCliente: string = "Juan Pérez";

const clienteData: Cliente = {
    id: 1,
    nombre: nombreCliente,
    metodosPago: [
    {
        id: 1,
        tipo: "Crédito",
        tipoMetodo: "Tarjeta",
        nombreTitular: "Juan Pérez",
        numeroEnmascarado: "**** **** **** 1234",
        fechaVencimiento: new Date(2025, 11, 31),
        direccionFacturacion: "Calle Falsa 123",
        monedaPreferida: "USD",
        estado: "Activo"
    },
    {
        id: 2,
        tipo: "Online",
        tipoMetodo: "Paypal",
        nombreTitular: "Juan Pérez",
        numeroEnmascarado: "N/A",
        fechaVencimiento: new Date(2030, 0, 1),
        direccionFacturacion: "Calle Falsa 123",
        monedaPreferida: "USD",
        estado: "Activo"
    }
    ],
    reclamos: [],
    historialAccesos: [],
    notificaciones: [],
    Verificacion: []
};

clienteData.reclamos.push({
    id: 1,
    usuarioId: 1,
    fechaReclamo: new Date(),
    tipoReclamo: "Garantía",
    descripcion: "Producto defectuoso",
    estado: "Pendiente",
    respuesta: "",
    fechaRespuesta: new Date(),
    prioridad: "Alta",
});

clienteData.historialAccesos.push({
    id: 1,
    fecha: new Date(),
    MetodoAutenticacion: "Contraseña",
    ip: "192.168.1.1",
    dispositivo: "Móvil",
    descripcion: "Acceso desde dispositivo móvil",
    estado: "Exitoso"
});

clienteData.notificaciones.push({
    id: 1,
    usuarioId: 1,
    tipoNotificacion: "Pedido",
    mensaje: "Tu pedido ha sido enviado",
    fechaEnvio: new Date(),
    leido: false,
    canal: "Email",
    importancia: "Alta"
});
clienteData.Verificacion.push({
    id: 1,
    usuarioId: 1,
    tipo: "identidad",
    codigoVerificacion: "123456",
    documentoUrl: "http://example.com/documento.jpg",
    estado: "pendiente",
    fechaSolicitud: new Date(),
    fechaVerificacion: new Date(),
});
clienteData.historialAccesos.push({
    id: 2,
    fecha: new Date(),
    MetodoAutenticacion: "Contraseña",
    ip: "192.168.1.2",
    dispositivo: "PC",
    descripcion: "Acceso desde PC de escritorio",
    estado: "Exitoso"
});

function agregarMetodoPago(cliente: Cliente, metodo: MetodoPago): void {
    cliente.metodosPago = [...cliente.metodosPago, metodo];
}


function mostrarCliente(cliente: Cliente): void {
    console.log("🧍 Cliente:", cliente.nombre);
  // Especificamos el tipo del parámetro para evitar implicit any
    console.log(
    "💳 Métodos de Pago:",
    cliente.metodosPago.map((m: MetodoPago) => m.tipo).join(", ")
    );
    console.log("📋 Reclamos:", cliente.reclamos.length);
    console.log("🕒 Historial de Accesos:");
    mostrarHistorialAccesos(cliente.historialAccesos);
    console.log("📩 Notificaciones:");
    mostrarNotificaciones(cliente.notificaciones);
    console.log("🔍 Verificaciones:");
    console.log(cliente.Verificacion);
}


function mostrarNotificaciones(notificaciones: Notificacion[]): void {
    for (const noti of notificaciones) {
    console.log(
        `📩 [${noti.leido ? "Leído" : "Nuevo"}] ${noti.mensaje}`
    );
    }
}

function mostrarHistorialAccesos(historial: HistorialAcceso[]): void {
    for (const acceso of historial) {
    console.log(
        `   - ${acceso.fecha.toLocaleString()} | ${acceso.descripcion}`
    );
    }
}

function procesarReclamos(
    reclamos: Reclamo[],
    callback: (cantidad: number) => void
): void {
    callback(reclamos.length);
}

function mostrarVerificaciones(
    verificaciones: Verificacion[]
): void {
    for (const verificacion of verificaciones) {
    console.log(
        `🔍 Verificación ID: ${verificacion.id} | Estado: ${verificacion.estado}`
    );
    }
}

function operacionLenta(): Promise<string> {
    return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Proceso terminado"), 2000);
    });
}

async function ejecutarProceso(): Promise<void> {
    const resultado = await operacionLenta();
    console.log(resultado);
}
mostrarCliente(clienteData);

procesarReclamos(clienteData.reclamos, (cantidad) => {
    console.log("📌 Reclamos procesados:", cantidad);
});

ejecutarProceso();
