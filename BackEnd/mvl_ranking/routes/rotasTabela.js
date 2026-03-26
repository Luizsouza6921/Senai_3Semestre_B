import express from 'express';
import TabelaController from '../controllers/TabelaControllers.js';

const router = express.Router();

router.get('/tabela', TabelaController.listar);

router.post('/tabela', TabelaController.adicionar);

router.post('/tabela/adicionar-pontuacao', TabelaController.AdicionarPontuacao);

export default router;