import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { HistorialAcceso } from "../Models/HistorialAcceso";

const histRepo = AppDataSource.getRepository(HistorialAcceso);

export const getAllHistoriales = async (_req: Request, res: Response) => {
    try {
    const items = await histRepo.find({ relations: ["verificacion"] });
    res.json(items);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener historiales", error });
    }
};

export const getHistorialById = async (req: Request, res: Response) => {
    try {
    const item = await histRepo.findOne({
        where: { id: +req.params.id },
        relations: ["verificacion"]
    });
    if (item) res.json(item);
    else res.status(404).json({ mensaje: "Historial no encontrado" });
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener historial", error });
    }
};

export const createHistorial = async (req: Request, res: Response) => {
    try {
    const nuevo = histRepo.create(req.body);
    const resultado = await histRepo.save(nuevo);
    res.status(201).json(resultado);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al crear historial", error });
    }
};

export const updateHistorial = async (req: Request, res: Response) => {
    try {
    const item = await histRepo.findOneBy({ id: +req.params.id });
    if (!item) {
        return res.status(404).json({ mensaje: "Historial no encontrado" });
    }
    histRepo.merge(item, req.body);
    const updated = await histRepo.save(item);
    res.json(updated);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar historial", error });
    }
};

export const deleteHistorial = async (req: Request, res: Response) => {
    try {
    const result = await histRepo.delete(+req.params.id);
    if (result.affected) res.json({ mensaje: "Historial eliminado" });
    else res.status(404).json({ mensaje: "Historial no encontrado" });
    } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar historial", error });
    }
};
