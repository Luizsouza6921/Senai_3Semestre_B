import {estilos} from './gameEstilos'
import { useState } from 'react';

const Game = () => {

    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero);
    const [chute, setChute] = useState("");
    const [mensagem, setMensagem] = useState("Adivinhe um numero entre 1 e 100");
    const [tentativas, setTentativas] = useState(1);
    const [jogofinalizado, setJogoFinalizado] = useState(false);

    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function botaoChutar() {
        if (numeroSecreto == chute) {
            setMensagem(`Parabéns! Você acertou o número secreto em ${tentativas} tentativas!`);
            setJogoFinalizado(true);
        } else if (chute < numeroSecreto) {
            setMensagem("O número secreto é maior do que o seu chute.");
            setTentativas(tentativas + 1);
        } else {
            setMensagem("O número secreto é menor do que o seu chute.");
            setTentativas(tentativas + 1);
        }
    }

    const botaoNovoJogo = () => {   
        setNumeroSecreto(sortearNumero());
        setChute("");
        setMensagem("Adivinhe um numero entre 1 e 100");
        setTentativas(1);
        setJogoFinalizado(false);
    }

    return (
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo do Número Secreto</h1>
                        <p style={estilos.mensagem}>{mensagem} </p>
                    </div>
                    <input type="number" style={estilos.chute} onChange={(event) => setChute(event.target.value)} value={chute}/>
                    <div style={estilos.botoes}>
                        <button style={estilos.botao} onClick={botaoChutar}>Chutar</button>
                        <button style={estilos.botao} onClick={botaoNovoJogo}>Novo jogo</button>                        
                    </div>
                </div>
                <img src="./img/ia.png" style={estilos.imagem} />
            </div>
        </section>
    )
}


export default Game;