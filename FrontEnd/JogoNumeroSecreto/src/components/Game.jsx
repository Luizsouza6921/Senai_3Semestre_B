import estilos from "../CSS/GameEstilos";
import { useState } from "react";

const Game = () => {
    const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto())
    const [mensagem, setMensagem] = useState("Tente adivinhar o número secreto entre 1 e 100!")
    const [chute, setChute] = useState("")
    const [tentativas, setTentativas] = useState(1)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

    function gerarNumeroSecreto() {
        const numeroSecreto = Math.floor(Math.random() * 100) + 1
        return numeroSecreto
    }

    function verificarChute() {
        const chuteNumerico = parseInt(chute);
        if (chuteNumerico === numeroSecreto) {
            setMensagem(`✅ Acertou! Parabéns você acertou em ${tentativas} tentativas`);
            setJogoFinalizado(true);
        } else {
            if (chuteNumerico > numeroSecreto) {
                setMensagem(`O número secreto é menor que ${chuteNumerico}!`);
            } else {
                setMensagem(`O número secreto é maior que ${chuteNumerico}!`);
            }
            setTentativas(tentativas + 1);
            setChute("");
        }
        
    }

    function novoJogo() {
        gerarNumeroSecreto()
        setMensagem("Tente adivinhar o número secreto entre 1 e 100!")
        setChute("")
        setTentativas(1)
        setJogoFinalizado(false)
    }
    
    return (
        <div style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <h1 style={estilos.titulo}>
                        Jogo do Número Secreto</h1>
                    <p style={estilos.mensagem} > {mensagem} </p>
                </div>
                <input type="number" style={estilos.chute} value={chute} onChange={(e) => setChute(e.target.value)} />
                <div style={estilos.buttons}>
                <button style={estilos.button} onClick={verificarChute}>Chutar!</button>
                <button style={estilos.button} onClick={novoJogo}>Novo Jogo</button>
                </div>
            </div>
            <img src="../public/img/ia.png" alt="" style={estilos.imagem} />
        </div>
    )
}

export default Game
