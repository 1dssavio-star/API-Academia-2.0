import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());


// GET - Mostra as mensagens
app.get("/", (req, res) => {
    res.status(200).send("API Academia funcionando!");
});

// GET - Lista os  alunos
app.get("/alunos", (req, res) => {
    res.status(200).json({
        mensagem: "Lista de alunos"
    });
});

// POST - Cadastra os alunos
app.post("/alunos", (req, res) => {
    const { nome, email } = req.body;

    res.status(201).json({
        mensagem: "Aluno cadastrado!",
        nome: nome,
        email: email
    });
});

// PUT - Atualizar alunos
app.put("/alunos/:id", (req, res) => {
    const id = req.params.id;
    const { nome, email } = req.body;

    res.status(200).json({
        mensagem: "Aluno atualizado!",
        id: id,
        nome: nome,
        email: email
    });
});

// DELETE - Excluir aluno
app.delete("/alunos/:id", (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        mensagem: "Aluno excluído!",
        id: id
    });
});

// Iniciar servidor
app.listen(3000, () =>  {
    console.log(`Servidor rodando na porta 3000`);
});