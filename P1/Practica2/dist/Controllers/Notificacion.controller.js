"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotificacion = exports.updateNotificacion = exports.createNotificacion = exports.getNotificacionById = exports.getAllNotificaciones = void 0;
const data_source_1 = require("../data-source");
const Notificacion_1 = require("../Models/Notificacion");
const notifRepo = data_source_1.AppDataSource.getRepository(Notificacion_1.Notificacion);
const getAllNotificaciones = async (_req, res) => {
    try {
        const items = await notifRepo.find({ relations: ["reclamo"] });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener notificaciones", error });
    }
};
exports.getAllNotificaciones = getAllNotificaciones;
const getNotificacionById = async (req, res) => {
    try {
        const item = await notifRepo.findOne({
            where: { id: +req.params.id },
            relations: ["reclamo"]
        });
        if (item)
            res.json(item);
        else
            res.status(404).json({ mensaje: "Notificación no encontrada" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener notificación", error });
    }
};
exports.getNotificacionById = getNotificacionById;
const createNotificacion = async (req, res) => {
    try {
        const nuevo = notifRepo.create(req.body);
        const resultado = await notifRepo.save(nuevo);
        res.status(201).json(resultado);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al crear notificación", error });
    }
};
exports.createNotificacion = createNotificacion;
const updateNotificacion = async (req, res) => {
    try {
        const item = await notifRepo.findOneBy({ id: +req.params.id });
        if (!item) {
            return res.status(404).json({ mensaje: "Notificación no encontrada" });
        }
        notifRepo.merge(item, req.body);
        const updated = await notifRepo.save(item);
        res.json(updated);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar notificación", error });
    }
};
exports.updateNotificacion = updateNotificacion;
const deleteNotificacion = async (req, res) => {
    try {
        const result = await notifRepo.delete(+req.params.id);
        if (result.affected)
            res.json({ mensaje: "Notificación eliminada" });
        else
            res.status(404).json({ mensaje: "Notificación no encontrada" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar notificación", error });
    }
};
exports.deleteNotificacion = deleteNotificacion;
