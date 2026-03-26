import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('API Star Wars');
});

app.get('/starwars/personagem/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const { name, height, eye_color } = await response.json();
    res.json({
        nome: name,
        altura: height,
        cor_dos_olhos: eye_color
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar personagem' });
  }
});

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}/starwars/personagem/1`);
});


