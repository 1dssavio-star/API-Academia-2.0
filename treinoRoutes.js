
import { Router } from "express";

import {cadastrarPlano,  listarPlanos, buscarPlano, atualizarPlano, excluirPlano} from "../gerenciadores/planoController.js";

const router = Router();

router.post("/", cadastrarPlano);
router.get("/", listarPlanos);
router.get("/:id", buscarPlano);
router.put("/:id", atualizarPlano);
router.delete("/:id", excluirPlano);

export default router;
