import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Notificacion } from "../Models/Notificacion";

const notifRepo = AppDataSource.getRepository(Notificacion);

export const getAllNotificaciones = async (_req: Request, res: Response) => {
    try {
    const items = await notifRepo.find({ relations: ["reclamo"] });
    res.json(items);
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener notificaciones", error });
    }
};

export const getNotificacionById = async (req: Request, res: Response) => {
    try {
    const item = await notifRepo.findOne({
        where: { id: +req.params.id },
        relations: ["reclamo"]
    });
    if (item) res.json(item);
    else res.status(404).json({ mensaje: "Notificación no encontrada" });
    } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener notificación", error });
    }
};

export const createNotificacion = async (req: Request, res: Response) => {
try {
    const nuevo = notifRepo.create(req.body);
    const resultado = await notifRepo.save(nuevo);
    res.status(201).json(resultado);
} catch (error) {
    res.status(500).json({ mensaje: "Error al crear notificación", error });
}
};

export const updateNotificacion = async (req: Request, res: Response) => {
try {
    const item = await notifRepo.findOneBy({ id: +req.params.id });
    if (!item) {
        return res.status(404).json({ mensaje: "Notificación no encontrada" });
    }
    notifRepo.merge(item, req.body);
    const updated = await notifRepo.save(item);
    res.json(updated);
} catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar notificación", error });
}
};

export const deleteNotificacion = async (req: Request, res: Response) => {
try {
    const result = await notifRepo.delete(+req.params.id);
    if (result.affected) res.json({ mensaje: "Notificación eliminada" });
    else res.status(404).json({ mensaje: "Notificación no encontrada" });
} catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar notificación", error });
}
};
