
import { Router } from "express";

import { cadastrarAluno, listarAlunos, buscarAluno, atualizarAluno, excluirAluno } from "../gerenciadores/alunoController.js";

const router = Router();

// Cadastrar aluno
router.post("/", cadastrarAluno);

// Listar todos os alunos
router.get("/", listarAlunos);

// Buscar aluno pelo ID
router.get("/:id", buscarAluno);

// Atualizar aluno
router.put("/:id", atualizarAluno);

// Excluir aluno
router.delete("/:id", excluirAluno);

export default router;
