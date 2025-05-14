"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
const MetodoPago_1 = require("./Models/MetodoPago");
const Reclamo_1 = require("./Models/Reclamo");
const Verificacion_1 = require("./Models/Verificacion");
const Notificacion_1 = require("./Models/Notificacion");
const HistorialAcceso_1 = require("./Models/HistorialAcceso");
const metodoPago_routes_1 = __importDefault(require("./Routes/metodoPago.routes"));
const reclamo_routes_1 = __importDefault(require("./Routes/reclamo.routes"));
const verificacion_routes_1 = __importDefault(require("./Routes/verificacion.routes"));
const historial_routes_1 = __importDefault(require("./Routes/historial.routes"));
const notificacion_routes_1 = __importDefault(require("./Routes/notificacion.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("💖 Bienvenido a mi API de Clientes con TypeORM 💖");
});
data_source_1.AppDataSource.initialize()
    .then(async () => {
    console.log("✅ Conectado a PostgreSQL");
    // MOSTRAR DATOS EN TERMINAL
    const metodos = await data_source_1.AppDataSource.getRepository(MetodoPago_1.MetodoPago).find();
    const reclamos = await data_source_1.AppDataSource.getRepository(Reclamo_1.Reclamo).find({ relations: ["metodoPago", "verificacion"] });
    const verificaciones = await data_source_1.AppDataSource.getRepository(Verificacion_1.Verificacion).find({ relations: ["reclamo", "accesos"] });
    const notificaciones = await data_source_1.AppDataSource.getRepository(Notificacion_1.Notificacion).find({ relations: ["reclamo"] });
    const historiales = await data_source_1.AppDataSource.getRepository(HistorialAcceso_1.HistorialAcceso).find({ relations: ["verificacion"] });
    console.log("\n📄 Métodos de Pago:\n", metodos);
    console.log("\n📄 Reclamos:\n", reclamos);
    console.log("\n📄 Verificaciones:\n", verificaciones);
    console.log("\n📄 Notificaciones:\n", notificaciones);
    console.log("\n📄 Historiales de Acceso:\n", historiales);
    // Activar rutas
    app.use("/metodos", metodoPago_routes_1.default);
    app.use("/reclamos", reclamo_routes_1.default);
    app.use("/verificaciones", verificacion_routes_1.default);
    app.use("/historiales", historial_routes_1.default);
    app.use("/notificaciones", notificacion_routes_1.default);
    // Iniciar servidor
    app.listen(3000, () => {
        console.log("\n🚀 Servidor corriendo en http://localhost:3000\n");
    });
})
    .catch((error) => {
    console.error("❌ Error al conectar a PostgreSQL:");
    console.error("📌 Mensaje:", error.message);
    console.error("📌 Detalles:", error);
});
