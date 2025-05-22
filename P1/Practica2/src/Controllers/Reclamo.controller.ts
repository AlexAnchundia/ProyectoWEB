import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Reclamo } from "../Models/Reclamo";

const reclamoRepo = AppDataSource.getRepository(Reclamo);

export const getAllReclamos = async (_req: Request, res: Response) => {
    try {
    const reclamos = await reclamoRepo.find({
        relations: ["metodoPago", "verificacion", "notificaciones"]
    });
    res.json(reclamos);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reclamos", error });
    }
};

export const getReclamoById = async (req: Request, res: Response) => {
    try {
    const reclamo = await reclamoRepo.findOne({
        where: { id: +req.params.id },
        relations: ["metodoPago", "verificacion", "notificaciones"]
    });
    if (reclamo) res.json(reclamo);
    else res.status(404).json({ mensaje: "Reclamo no encontrado" });
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el reclamo", error });
    }
};

export const createReclamo = async (req: Request, res: Response) => {
    try {
    const nuevo = reclamoRepo.create(req.body);
    const resultado = await reclamoRepo.save(nuevo);
    res.status(201).json(resultado);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al crear reclamo", error });
    }
};

export const updateReclamo = async (req: Request, res: Response) => {
    try {
    const reclamo = await reclamoRepo.findOneBy({ id: +req.params.id });
    if (!reclamo) {
        return res.status(404).json({ mensaje: "Reclamo no encontrado" });
    }
    reclamoRepo.merge(reclamo, req.body);
    const actualizado = await reclamoRepo.save(reclamo);
    res.json(actualizado);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar reclamo", error });
    }
};

export const deleteReclamo = async (req: Request, res: Response) => {
    try {
    const result = await reclamoRepo.delete(+req.params.id);
    if (result.affected) res.json({ mensaje: "Reclamo eliminado" });
    else res.status(404).json({ mensaje: "Reclamo no encontrado" });
    } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar reclamo", error });
    }
};
