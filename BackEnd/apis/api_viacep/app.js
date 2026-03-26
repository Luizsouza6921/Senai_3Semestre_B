import express from 'express';
const app = express();
app.get('/dogs', express.static('public'))

app.get('/', (req, res) => {
    res.json("API Funcionando!");
});


app.get('/cep/:codigo', async (req, res) => {
    const { codigo } = req.params;
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`);
        const dados = await resposta.json();
        const data = await resposta.json();

        const estado = data.uf;
        const cidade = data.localidade;
        const bairro = data.bairro;
        const logradouro = data.logradouro;

        res.status(200).json({
            estado, 
            cidade, 
            bairro, 
            logradouro
        });


    } catch (error) {
        res.status(500).json({ error: "Erro ao consultar o CEP" });
    }
});

app.get('/dog/:id', async (req, res) => {
    const id = req.params.id;
    const url = `https://http.dog/${id}.jpg`

    res.json({url});
});

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}/dogs/1`);
});