"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVerificacion = exports.updateVerificacion = exports.createVerificacion = exports.getVerificacionById = exports.getAllVerificaciones = void 0;
const data_source_1 = require("../data-source");
const Verificacion_1 = require("../Models/Verificacion");
const verifRepo = data_source_1.AppDataSource.getRepository(Verificacion_1.Verificacion);
const getAllVerificaciones = async (_req, res) => {
    try {
        const items = await verifRepo.find({ relations: ["reclamo", "accesos"] });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener verificaciones", error });
    }
};
exports.getAllVerificaciones = getAllVerificaciones;
const getVerificacionById = async (req, res) => {
    try {
        const item = await verifRepo.findOne({
            where: { id: +req.params.id },
            relations: ["reclamo", "accesos"]
        });
        if (item)
            res.json(item);
        else
            res.status(404).json({ mensaje: "Verificación no encontrada" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener verificación", error });
    }
};
exports.getVerificacionById = getVerificacionById;
const createVerificacion = async (req, res) => {
    try {
        const nuevo = verifRepo.create(req.body);
        const resultado = await verifRepo.save(nuevo);
        res.status(201).json(resultado);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al crear verificación", error });
    }
};
exports.createVerificacion = createVerificacion;
const updateVerificacion = async (req, res) => {
    try {
        const item = await verifRepo.findOneBy({ id: +req.params.id });
        if (!item) {
            return res.status(404).json({ mensaje: "Verificación no encontrada" });
        }
        verifRepo.merge(item, req.body);
        const updated = await verifRepo.save(item);
        res.json(updated);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar verificación", error });
    }
};
exports.updateVerificacion = updateVerificacion;
const deleteVerificacion = async (req, res) => {
    try {
        const result = await verifRepo.delete(+req.params.id);
        if (result.affected)
            res.json({ mensaje: "Verificación eliminada" });
        else
            res.status(404).json({ mensaje: "Verificación no encontrada" });
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar verificación", error });
    }
};
exports.deleteVerificacion = deleteVerificacion;
