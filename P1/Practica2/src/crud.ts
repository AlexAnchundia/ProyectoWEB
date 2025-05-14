import { AppDataSource } from "./data-source";
import { MetodoPago } from "./Models/MetodoPago";
import { Reclamo } from "./Models/Reclamo";
import { Verificacion } from "./Models/Verificacion";
import { HistorialAcceso } from "./Models/HistorialAcceso";
import { Notificacion } from "./Models/Notificacion";

async function seedCRUD() {
    try {
    await AppDataSource.initialize();
    console.log("✅ Conectado a PostgreSQL");

    // Crear método de pago único
    const metodoPago = AppDataSource.manager.create(MetodoPago, {
        tipo: "Tarjeta",
      detalles: "Mastercard **** 5678",
    });
    await AppDataSource.manager.save(metodoPago);
    console.log("✅ Método de pago insertado:", metodoPago);

    for (let i = 1; i <= 5; i++) {
      // Verificación
        const verificacion = AppDataSource.manager.create(Verificacion, {
        estado: i % 2 === 0 ? "Verificado" : "Pendiente",
        });
        await AppDataSource.manager.save(verificacion);

      // Reclamo
        const reclamo = AppDataSource.manager.create(Reclamo, {
        descripcion: `Reclamo número ${i}`,
        fecha: new Date(),
        metodoPago: metodoPago,
        verificacion: verificacion,
        });
        await AppDataSource.manager.save(reclamo);

      // Notificación
        const notificacion = AppDataSource.manager.create(Notificacion, {
        mensaje: `Notificación para reclamo #${i}`,
        enviadaEn: new Date(),
        reclamo: reclamo,
        });
        await AppDataSource.manager.save(notificacion);

      // Historial de Acceso
        const historial = AppDataSource.manager.create(HistorialAcceso, {
        ip: `192.168.1.${i}`,
        fechaAcceso: new Date(),
        verificacion: verificacion,
        });
        await AppDataSource.manager.save(historial);

      // Mostrar en la terminal
        console.log(`🔹 Reclamo #${i} creado con verificación y notificación`);
    }

    console.log("🌱 Seed CRUD completado correctamente.");
    process.exit();
    } catch (error) {
    console.error("❌ Error en CRUD:", error);
    process.exit(1);
    }
}

seedCRUD();
