"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Datos base
const nombre = "Juan Pérez";
const Cliente = {
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
function mostrarNotificaciones(notificaciones) {
    for (const noti of notificaciones) {
        console.log(`📩 [${noti.leido ? "Leído" : "Nuevo"}] ${noti.mensaje}`);
    }
}
mostrarNotificaciones(Cliente.notificaciones);
