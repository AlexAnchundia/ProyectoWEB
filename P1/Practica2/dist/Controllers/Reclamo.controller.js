"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReclamo = exports.updateReclamo = exports.createReclamo = exports.getReclamoById = exports.getAllReclamos = void 0;
const data_source_1 = require("../data-source");
const Reclamo_1 = require("../Models/Reclamo");
const reclamoRepo = data_source_1.AppDataSource.getRepository(Reclamo_1.Reclamo);
const getAllReclamos = async (_req, res) => {
    try {
        const reclamos = await reclamoRepo.find({
            relations: ["metodoPago", "verificacion", "notificaciones"]
        });
        res.json(reclamos);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener reclamos", error });
    }
};
exports.getAllReclamos = getAllReclamos;
const getReclamoById = async (req, res) => {
    try {
        const reclamo = await reclamoRepo.findOne({
            where: { id: +req.params.id },
            relations: ["metodoPago", "verificacion", "notificaciones"]
        });
        if (reclamo)
            res.json(reclamo);
        else
            res.status(404).json({ mensaje: "Reclamo no encontrado" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener el reclamo", error });
    }
};
exports.getReclamoById = getReclamoById;
const createReclamo = async (req, res) => {
    try {
        const nuevo = reclamoRepo.create(req.body);
        const resultado = await reclamoRepo.save(nuevo);
        res.status(201).json(resultado);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al crear reclamo", error });
    }
};
exports.createReclamo = createReclamo;
const updateReclamo = async (req, res) => {
    try {
        const reclamo = await reclamoRepo.findOneBy({ id: +req.params.id });
        if (!reclamo) {
            return res.status(404).json({ mensaje: "Reclamo no encontrado" });
        }
        reclamoRepo.merge(reclamo, req.body);
        const actualizado = await reclamoRepo.save(reclamo);
        res.json(actualizado);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar reclamo", error });
    }
};
exports.updateReclamo = updateReclamo;
const deleteReclamo = async (req, res) => {
    try {
        const result = await reclamoRepo.delete(+req.params.id);
        if (result.affected)
            res.json({ mensaje: "Reclamo eliminado" });
        else
            res.status(404).json({ mensaje: "Reclamo no encontrado" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar reclamo", error });
    }
};
exports.deleteReclamo = deleteReclamo;
