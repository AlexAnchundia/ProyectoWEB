"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_source_1 = require("../data-source");
const Reclamo_1 = require("../Models/Reclamo");
const router = (0, express_1.Router)();
const repo = data_source_1.AppDataSource.getRepository(Reclamo_1.Reclamo);
router.get("/", async (_req, res) => {
    const all = await repo.find();
    res.json(all);
});
router.get("/:id", async (req, res) => {
    const item = await repo.findOneBy({ id: Number(req.params.id) });
    if (!item)
        return res.status(404).json({ message: "No encontrado" });
    res.json(item);
});
router.post("/", async (req, res) => {
    const nuevo = repo.create(req.body);
    const resultado = await repo.save(nuevo);
    res.status(201).json(resultado);
});
router.put("/:id", async (req, res) => {
    await repo.update(req.params.id, req.body);
    const actualizado = await repo.findOneBy({ id: Number(req.params.id) });
    res.json(actualizado);
});
router.delete("/:id", async (req, res) => {
    await repo.delete(req.params.id);
    res.status(204).send();
});
exports.default = router;
