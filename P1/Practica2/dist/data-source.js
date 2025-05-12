"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const HistorialAcceso_1 = require("./Models/HistorialAcceso");
const MetodoPago_1 = require("./Models/MetodoPago");
const Notificacion_1 = require("./Models/Notificacion");
const Reclamo_1 = require("./Models/Reclamo");
const Verificacion_1 = require("./Models/Verificacion");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "Cliente",
    synchronize: true,
    logging: false,
    entities: [HistorialAcceso_1.HistorialAcceso, MetodoPago_1.MetodoPago, Notificacion_1.Notificacion, Reclamo_1.Reclamo, Verificacion_1.Verificacion],
});
