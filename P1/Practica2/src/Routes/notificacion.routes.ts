import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Notificacion } from "../Models/Notificacion";

const router = Router();
const repo = AppDataSource.getRepository(Notificacion);

router.get("/", async (_req, res) => {
    const all = await repo.find();
    res.json(all);
});

router.get("/:id", async (req, res) => {
    const item = await repo.findOneBy({ id: Number(req.params.id) });
    if (!item) return res.status(404).json({ message: "No encontrado" });
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

export default router;
