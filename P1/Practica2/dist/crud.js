"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const MetodoPago_1 = require("./Models/MetodoPago");
const Reclamo_1 = require("./Models/Reclamo");
const Verificacion_1 = require("./Models/Verificacion");
const HistorialAcceso_1 = require("./Models/HistorialAcceso");
const Notificacion_1 = require("./Models/Notificacion");
async function seedCRUD() {
    try {
        await data_source_1.AppDataSource.initialize();
        console.log("✅ Conectado a PostgreSQL");
        // Crear método de pago único
        const metodoPago = data_source_1.AppDataSource.manager.create(MetodoPago_1.MetodoPago, {
            tipo: "Tarjeta",
            detalles: "Mastercard **** 5678",
        });
        await data_source_1.AppDataSource.manager.save(metodoPago);
        console.log("✅ Método de pago insertado:", metodoPago);
        for (let i = 1; i <= 5; i++) {
            // Verificación
            const verificacion = data_source_1.AppDataSource.manager.create(Verificacion_1.Verificacion, {
                estado: i % 2 === 0 ? "Verificado" : "Pendiente",
            });
            await data_source_1.AppDataSource.manager.save(verificacion);
            // Reclamo
            const reclamo = data_source_1.AppDataSource.manager.create(Reclamo_1.Reclamo, {
                descripcion: `Reclamo número ${i}`,
                fecha: new Date(),
                metodoPago: metodoPago,
                verificacion: verificacion,
            });
            await data_source_1.AppDataSource.manager.save(reclamo);
            // Notificación
            const notificacion = data_source_1.AppDataSource.manager.create(Notificacion_1.Notificacion, {
                mensaje: `Notificación para reclamo #${i}`,
                enviadaEn: new Date(),
                reclamo: reclamo,
            });
            await data_source_1.AppDataSource.manager.save(notificacion);
            // Historial de Acceso
            const historial = data_source_1.AppDataSource.manager.create(HistorialAcceso_1.HistorialAcceso, {
                ip: `192.168.1.${i}`,
                fechaAcceso: new Date(),
                verificacion: verificacion,
            });
            await data_source_1.AppDataSource.manager.save(historial);
            // Mostrar en la terminal
            console.log(`🔹 Reclamo #${i} creado con verificación y notificación`);
        }
        console.log("🌱 Seed CRUD completado correctamente.");
        process.exit();
    }
    catch (error) {
        console.error("❌ Error en CRUD:", error);
        process.exit(1);
    }
}
seedCRUD();
