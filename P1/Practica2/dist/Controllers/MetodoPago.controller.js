"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMetodoPago = exports.updateMetodoPago = exports.createMetodoPago = exports.getMetodoPagoById = exports.getAllMetodoPagos = void 0;
const data_source_1 = require("../data-source");
const MetodoPago_1 = require("../Models/MetodoPago");
const metodoPagoRepository = data_source_1.AppDataSource.getRepository(MetodoPago_1.MetodoPago);
const getAllMetodoPagos = async (_req, res) => {
    const metodoPagos = await metodoPagoRepository.find();
    res.json(metodoPagos);
};
exports.getAllMetodoPagos = getAllMetodoPagos;
const getMetodoPagoById = async (req, res) => {
    const metodoPago = await metodoPagoRepository.findOneBy({ id: parseInt(req.params.id) });
    res.json(metodoPago);
};
exports.getMetodoPagoById = getMetodoPagoById;
const createMetodoPago = async (req, res) => {
    const nuevoMetodoPago = metodoPagoRepository.create(req.body);
    const resultado = await metodoPagoRepository.save(nuevoMetodoPago);
    res.status(201).json(resultado);
};
exports.createMetodoPago = createMetodoPago;
const updateMetodoPago = async (req, res) => {
    await metodoPagoRepository.update(req.params.id, req.body);
    const metodoPagoActualizado = await metodoPagoRepository.findOneBy({ id: parseInt(req.params.id) });
    res.json(metodoPagoActualizado);
};
exports.updateMetodoPago = updateMetodoPago;
const deleteMetodoPago = async (req, res) => {
    await metodoPagoRepository.delete(req.params.id);
    res.json({ mensaje: "Método de pago eliminado" });
};
exports.deleteMetodoPago = deleteMetodoPago;
