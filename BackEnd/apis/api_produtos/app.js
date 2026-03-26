import express from 'express';
import rotasUsuarios from './src/routes/rotasUsuarios.js';
import rotasProdutos from './src/routes/rotasProdutos.js';
import { BD, testarConexao } from './db.js';

import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))
app.use(cors());

app.get('/', async (req, res) => {
    await testarConexao();
    res.json("API Produtos Funcionando!");
});

app.use(rotasUsuarios);
app.use(rotasProdutos);

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
