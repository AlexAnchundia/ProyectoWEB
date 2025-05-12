import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { MetodoPago } from "./Models/MetodoPago";
import { Reclamo } from "./Models/Reclamo";
import { Verificacion } from "./Models/Verificacion";
import { Notificacion } from "./Models/Notificacion";
import { HistorialAcceso } from "./Models/HistorialAcceso";

import metodoPagoRoutes from "./Routes/metodoPago.routes";
import reclamoRoutes from "./Routes/reclamo.routes";
import verificacionRoutes from "./Routes/verificacion.routes";
import historialRoutes from "./Routes/historial.routes";
import notificacionRoutes from "./Routes/notificacion.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
    res.send("💖 Bienvenido a mi API de Clientes con TypeORM 💖");
});

AppDataSource.initialize()
    .then(async () => {
    console.log("✅ Conectado a PostgreSQL");

    // MOSTRAR DATOS EN TERMINAL
    const metodos = await AppDataSource.getRepository(MetodoPago).find();
    const reclamos = await AppDataSource.getRepository(Reclamo).find({ relations: ["metodoPago", "verificacion"] });
    const verificaciones = await AppDataSource.getRepository(Verificacion).find({ relations: ["reclamo", "accesos"] });
    const notificaciones = await AppDataSource.getRepository(Notificacion).find({ relations: ["reclamo"] });
    const historiales = await AppDataSource.getRepository(HistorialAcceso).find({ relations: ["verificacion"] });

    console.log("\n📄 Métodos de Pago:\n", metodos);
    console.log("\n📄 Reclamos:\n", reclamos);
    console.log("\n📄 Verificaciones:\n", verificaciones);
    console.log("\n📄 Notificaciones:\n", notificaciones);
    console.log("\n📄 Historiales de Acceso:\n", historiales);

    // Activar rutas
    app.use("/metodos", metodoPagoRoutes);
    app.use("/reclamos", reclamoRoutes);
    app.use("/verificaciones", verificacionRoutes);
    app.use("/historiales", historialRoutes);
    app.use("/notificaciones", notificacionRoutes);

    // Iniciar servidor
    app.listen(3000, () => {
        console.log("\n🚀 Servidor corriendo en http://localhost:3000\n");
    });
    })
    .catch((error: any) => {
    console.error("❌ Error al conectar a PostgreSQL:");
    console.error("📌 Mensaje:", error.message);
    console.error("📌 Detalles:", error);
    });
