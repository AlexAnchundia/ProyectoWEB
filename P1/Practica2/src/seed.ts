import { AppDataSource } from "./data-source";
import { MetodoPago } from "./Models/MetodoPago";
import { Reclamo } from "./Models/Reclamo";
import { Verificacion } from "./Models/Verificacion";
import { HistorialAcceso } from "./Models/HistorialAcceso";
import { Notificacion } from "./Models/Notificacion";

async function seed() {
    await AppDataSource.initialize();
    console.log("📦 Conexión a la base de datos establecida con éxito");

    try {
    // Limpiar tablas y reiniciar IDs para evitar duplicados
    await AppDataSource.query(`
        TRUNCATE TABLE notificacion, reclamo, metodo_pago, verificacion, historial_acceso RESTART IDENTITY CASCADE;
    `);
    console.log("🧹 Tablas limpiadas y secuencias reiniciadas.");

    // Insertar método de pago base
    const metodo = AppDataSource.manager.create(MetodoPago, {
        tipo: "Tarjeta",
      detalles: "Visa **** 1234",
    });
    const metodoGuardado = await AppDataSource.manager.save(metodo);
    console.log("📄 Método de pago creado:", metodoGuardado);

    for (let i = 1; i <= 5; i++) {
      // Crear verificación
        const verificacion = AppDataSource.manager.create(Verificacion, {
        estado: i % 2 === 0 ? "Verificado" : "Pendiente",
        });
        const verificacionGuardada = await AppDataSource.manager.save(verificacion);

      // Crear reclamo relacionado
        const reclamo = AppDataSource.manager.create(Reclamo, {
        descripcion: `Reclamo número ${i}`,
        fecha: new Date(),
        metodoPago: metodoGuardado,
        verificacion: verificacionGuardada,
        });
        const reclamoGuardado = await AppDataSource.manager.save(reclamo);
        console.log(`📄 Reclamo creado #${i}:`, reclamoGuardado);

      // Crear notificación para el reclamo
        const notificacion = AppDataSource.manager.create(Notificacion, {
        mensaje: `Notificación para reclamo #${i}`,
        enviadaEn: new Date(),
        reclamo: reclamoGuardado,
        });
        const notificacionGuardada = await AppDataSource.manager.save(notificacion);
        console.log(`📄 Notificación creada para reclamo #${i}:`, notificacionGuardada);

      // Crear historial de acceso relacionado con verificación
        const historial = AppDataSource.manager.create(HistorialAcceso, {
        ip: `192.168.1.${i}`,
        fechaAcceso: new Date(),
        verificacion: verificacionGuardada,
        });
        const historialGuardado = await AppDataSource.manager.save(historial);
        console.log(`📄 Historial de acceso creado #${i}:`, historialGuardado);
    }

    console.log("✅ Seed completado sin errores.");
    } catch (error) {
    console.error("❌ Error durante el seed:", error);
    } finally {
    process.exit();
    }
}

seed();
