import Tabela from "../models/tabela.js";

let listaTabela = [
    new Tabela(1, 100, "Miguel"),
    new Tabela(2, 150, "Nicolas"),
    new Tabela(3, 200, "Felipe")
];

const TabelaController = {
    listar: (req, res) => {
        // Ordena para que o maior score fique no topo (opcional, mas bom para ranking)
        const listaOrdenada = [...listaTabela].sort((a, b) => b.pontuacao - a.pontuacao);
        res.render('tabela', { tabela: listaOrdenada });
    },

    adicionar: (req, res) => {
        const { pontuacao, jogador } = req.body;
        const id = listaTabela.length > 0 ? listaTabela[listaTabela.length - 1].id + 1 : 1;
        
        try {
            // Corrigido: a ordem dos parâmetros no constructor da sua classe é (id, pontuacao, jogador)
            const novoJogador = new Tabela(id, Number(pontuacao), jogador);
            listaTabela.push(novoJogador);
            res.redirect('/tabela');
        } catch (e) {
            res.status(400).send("Erro ao adicionar jogador");
        }
    },

    AdicionarPontuacao: (req, res) => {
    const { id } = req.body; 
    // Usamos Number() para garantir que a comparação funcione
    const jogadorEncontrado = listaTabela.find(t => t.id == Number(id)); 
    
    if (jogadorEncontrado) {
        jogadorEncontrado.AdicionarPontuacao(); 
        res.redirect('/tabela'); 
    } else {
        res.status(404).send("Jogador não encontrado");
    }
}
};

export default TabelaController;