"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistorial = exports.updateHistorial = exports.createHistorial = exports.getHistorialById = exports.getAllHistoriales = void 0;
const data_source_1 = require("../data-source");
const HistorialAcceso_1 = require("../Models/HistorialAcceso");
const histRepo = data_source_1.AppDataSource.getRepository(HistorialAcceso_1.HistorialAcceso);
const getAllHistoriales = async (_req, res) => {
    try {
        const items = await histRepo.find({ relations: ["verificacion"] });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener historiales", error });
    }
};
exports.getAllHistoriales = getAllHistoriales;
const getHistorialById = async (req, res) => {
    try {
        const item = await histRepo.findOne({
            where: { id: +req.params.id },
            relations: ["verificacion"]
        });
        if (item)
            res.json(item);
        else
            res.status(404).json({ mensaje: "Historial no encontrado" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener historial", error });
    }
};
exports.getHistorialById = getHistorialById;
const createHistorial = async (req, res) => {
    try {
        const nuevo = histRepo.create(req.body);
        const resultado = await histRepo.save(nuevo);
        res.status(201).json(resultado);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al crear historial", error });
    }
};
exports.createHistorial = createHistorial;
const updateHistorial = async (req, res) => {
    try {
        const item = await histRepo.findOneBy({ id: +req.params.id });
        if (!item) {
            return res.status(404).json({ mensaje: "Historial no encontrado" });
        }
        histRepo.merge(item, req.body);
        const updated = await histRepo.save(item);
        res.json(updated);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar historial", error });
    }
};
exports.updateHistorial = updateHistorial;
const deleteHistorial = async (req, res) => {
    try {
        const result = await histRepo.delete(+req.params.id);
        if (result.affected)
            res.json({ mensaje: "Historial eliminado" });
        else
            res.status(404).json({ mensaje: "Historial no encontrado" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar historial", error });
    }
};
exports.deleteHistorial = deleteHistorial;
