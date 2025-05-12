import { Router, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Verificacion } from "../Models/Verificacion";

const router = Router();
const repo = AppDataSource.getRepository(Verificacion);

router.get("/", async (_req, res) => {
    const all = await repo.find();
    res.json(all);
});

router.get("/:id", async (req: Request, res: Response) => {
    const item = await repo.findOneBy({ id: Number(req.params.id) });
    if (!item) return res.status(404).json({ message: "No encontrado" });
    res.json(item);
});

router.post("/", async (req: Request, res: Response) => {
    const nuevo = repo.create(req.body);
    const resultado = await repo.save(nuevo);
    res.status(201).json(resultado);
});

router.put("/:id", async (req: Request, res: Response) => {
    await repo.update(req.params.id, req.body);
    const actualizado = await repo.findOneBy({ id: Number(req.params.id) });
    res.json(actualizado);
});

router.delete("/:id", async (req: Request, res: Response) => {
    await repo.delete(req.params.id);
    res.status(204).send();
});

export default router;
