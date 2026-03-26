import express from 'express';
import livroController from '../controllers/LivroController.js';

const router = express.Router();

// rota para listar os livros
router.get('/livros', livroController.listarLivros);

// rota para adicionar livros
router.post('/livros', livroController.adicionar);

// rota para marcar como lido
router.post('/livros/marcar-lido', livroController.marcarComoLido);

export default router;