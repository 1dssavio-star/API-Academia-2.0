
import { Router } from "express";

import {cadastrarUsuario,fazerLogin} from "../gerenciadores/authController.js";

const router = Router();

router.post("/cadastro", cadastrarUsuario);
router.post("/login", fazerLogin);

export default router;
