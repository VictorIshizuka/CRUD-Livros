import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", autoresController.listarAutores)
    .get("/autores/:id", autoresController.mostrarAutor)
    .post("/autores", autoresController.cadastrarAutor)
    .put("/autores/:id", autoresController.atualizarAutor)
    .delete("/autores/:id", autoresController.deletarAutor)

export default router;