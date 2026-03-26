import React from "react"
import Aula05_Exercicio from "./Aula05_Exercicio";
import { estilos } from "../style/Estilos";

const Aula05 = () => {
    function botaoClique() {
        alert("Você clicou no Botão");
        console.log("Botão clicado");
    }

    function duploClique() {
        alert(" Vocé clicou duas vezes no Botão");
        console.log("Botão clicado duas vezes");
    }
    function entradaMouse() {
        alert("Vocé entrou com o mouse");
        console.log("Vocé entrou com o mouse");
    }
    function saidaMouse() {
        alert("Vocé saiu com o mouse");
        console.log("Vocé saiu com o mouse");
    }

    function alterarCor (event) {
        if (event.key === "v") {
            event.target.style.backgroundColor = "#ff0000";
        } else if (event.key === "v") {
            event.target.style.backgroundColor = "#66ff66";
        } else if (event.key === "c") {
            event.target.style.backgroundColor = "#b0b0b0";
        } else if (event.key === "r") {
            event.target.style.backgroundColor = "#880088";
        }
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aulas 05 - Eventos de um componente</h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicaçôes web</h3>
            <hr />

            <p>Evento onClick - clique do usuario em qualquer elemento</p>
            <button onClick={botaoClique}>Clique Aqui</button>
            <p onDoubleClick={duploClique}>Este parágrafo recebe um duplo clique</p>
            <hr />
            <p>Evento onChange - Sempre que um campo de entrada é alterado</p>

            <input onChange={() => alert(event.target.value)} type="text" placeholder="Digite algo..."/>
            <select onChange={() => alert(event.target.value)}>
                <option value="1A">1º A EM</option>
                <option value="2A">2º A EM</option>
                <option value="3A">3º A EM</option>
                <option value="3B">3º B EM</option>
            </select>
            <hr />
            
            <p>Evento onMouseEnter/onMouseLeave</p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>Passe o mouse aqui</p>
            <hr />
            <p>Evento onKeyDown - Aciona um evento quando uma tecla é pressionada</p>
            <input type="text" onKeyDown={(event) => alert(event.key)} />
            <input type="text" onKeyDown={alterarCor} placeholder="a- azul, v - verde, c - cinza, r - roxo"/>
        </div>

    )
}

export default Aula05