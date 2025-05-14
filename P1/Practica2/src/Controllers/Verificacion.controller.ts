import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Verificacion } from "../Models/Verificacion";

const verifRepo = AppDataSource.getRepository(Verificacion);

export const getAllVerificaciones = async (_req: Request, res: Response) => {
    try {
    const items = await verifRepo.find({ relations: ["reclamo", "accesos"] });
    res.json(items);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener verificaciones", error });
    }
};

export const getVerificacionById = async (req: Request, res: Response) => {
    try {
    const item = await verifRepo.findOne({
        where: { id: +req.params.id },
        relations: ["reclamo", "accesos"]
    });
    if (item) res.json(item);
    else res.status(404).json({ mensaje: "Verificación no encontrada" });
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener verificación", error });
    }
};

export const createVerificacion = async (req: Request, res: Response) => {
    try {
    const nuevo = verifRepo.create(req.body);
    const resultado = await verifRepo.save(nuevo);
    res.status(201).json(resultado);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al crear verificación", error });
    }
};

export const updateVerificacion = async (req: Request, res: Response) => {
    try {
    const item = await verifRepo.findOneBy({ id: +req.params.id });
    if (!item) {
        return res.status(404).json({ mensaje: "Verificación no encontrada" });
    }
    verifRepo.merge(item, req.body);
    const updated = await verifRepo.save(item);
    res.json(updated);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar verificación", error });
    }
};

export const deleteVerificacion = async (req: Request, res: Response) => {
    try {
    const result = await verifRepo.delete(+req.params.id);
    if (result.affected) res.json({ mensaje: "Verificación eliminada" });
    else res.status(404).json({ mensaje: "Verificación no encontrada" });
    } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar verificación", error });
    }
};
