import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import rotasTabela from './routes/rotasTabela.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(rotasTabela);

app.get('/', (req, res) =>{
    res.redirect('/tabela');
});

const porta = 3000;
app.listen(porta, () =>{
    console.log(`Servidor http://localhost:${porta}`)
})