"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const MetodoPago_1 = require("./Models/MetodoPago");
const Reclamo_1 = require("./Models/Reclamo");
const Verificacion_1 = require("./Models/Verificacion");
const HistorialAcceso_1 = require("./Models/HistorialAcceso");
const Notificacion_1 = require("./Models/Notificacion");
async function seed() {
    await data_source_1.AppDataSource.initialize();
    console.log("📦 Conexión a la base de datos establecida con éxito");
    try {
        // Limpiar tablas y reiniciar IDs para evitar duplicados
        await data_source_1.AppDataSource.query(`
        TRUNCATE TABLE notificacion, reclamo, metodo_pago, verificacion, historial_acceso RESTART IDENTITY CASCADE;
    `);
        console.log("🧹 Tablas limpiadas y secuencias reiniciadas.");
        // Insertar método de pago base
        const metodo = data_source_1.AppDataSource.manager.create(MetodoPago_1.MetodoPago, {
            tipo: "Tarjeta",
            detalles: "Visa **** 1234",
        });
        const metodoGuardado = await data_source_1.AppDataSource.manager.save(metodo);
        console.log("📄 Método de pago creado:", metodoGuardado);
        for (let i = 1; i <= 5; i++) {
            // Crear verificación
            const verificacion = data_source_1.AppDataSource.manager.create(Verificacion_1.Verificacion, {
                estado: i % 2 === 0 ? "Verificado" : "Pendiente",
            });
            const verificacionGuardada = await data_source_1.AppDataSource.manager.save(verificacion);
            // Crear reclamo relacionado
            const reclamo = data_source_1.AppDataSource.manager.create(Reclamo_1.Reclamo, {
                descripcion: `Reclamo número ${i}`,
                fecha: new Date(),
                metodoPago: metodoGuardado,
                verificacion: verificacionGuardada,
            });
            const reclamoGuardado = await data_source_1.AppDataSource.manager.save(reclamo);
            console.log(`📄 Reclamo creado #${i}:`, reclamoGuardado);
            // Crear notificación para el reclamo
            const notificacion = data_source_1.AppDataSource.manager.create(Notificacion_1.Notificacion, {
                mensaje: `Notificación para reclamo #${i}`,
                enviadaEn: new Date(),
                reclamo: reclamoGuardado,
            });
            const notificacionGuardada = await data_source_1.AppDataSource.manager.save(notificacion);
            console.log(`📄 Notificación creada para reclamo #${i}:`, notificacionGuardada);
            // Crear historial de acceso relacionado con verificación
            const historial = data_source_1.AppDataSource.manager.create(HistorialAcceso_1.HistorialAcceso, {
                ip: `192.168.1.${i}`,
                fechaAcceso: new Date(),
                verificacion: verificacionGuardada,
            });
            const historialGuardado = await data_source_1.AppDataSource.manager.save(historial);
            console.log(`📄 Historial de acceso creado #${i}:`, historialGuardado);
        }
        console.log("✅ Seed completado sin errores.");
    }
    catch (error) {
        console.error("❌ Error durante el seed:", error);
    }
    finally {
        process.exit();
    }
}
seed();
