
import { Router } from "express";

import {
    listarExercicios
} from "../gerenciadores/exercicioController.js";

const router = Router();

router.get("/", listarExercicios);

export default router;
