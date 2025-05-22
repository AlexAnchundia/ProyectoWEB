import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MetodoPago } from "../Models/MetodoPago";

const metodoPagoRepository = AppDataSource.getRepository(MetodoPago);

export const getAllMetodoPagos = async (_req: Request, res: Response) => {
    const metodoPagos = await metodoPagoRepository.find();
    res.json(metodoPagos);
};

export const getMetodoPagoById = async (req: Request, res: Response) => {
    const metodoPago = await metodoPagoRepository.findOneBy({ id: parseInt(req.params.id) });
    res.json(metodoPago);
};

export const createMetodoPago = async (req: Request, res: Response) => {
    const nuevoMetodoPago = metodoPagoRepository.create(req.body);
    const resultado = await metodoPagoRepository.save(nuevoMetodoPago);
    res.status(201).json(resultado);
};

export const updateMetodoPago = async (req: Request, res: Response) => {
    await metodoPagoRepository.update(req.params.id, req.body);
    const metodoPagoActualizado = await metodoPagoRepository.findOneBy({ id: parseInt(req.params.id) });
    res.json(metodoPagoActualizado);
};

export const deleteMetodoPago = async (req: Request, res: Response) => {
    await metodoPagoRepository.delete(req.params.id);
    res.json({ mensaje: "Método de pago eliminado" });
};
