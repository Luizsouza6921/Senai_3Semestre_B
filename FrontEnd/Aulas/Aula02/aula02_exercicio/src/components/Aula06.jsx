import { estilos } from "../style/Estilos";
import { useState } from "react";
import Aula06_Contador from "./Aula06_Contador";

const Aula06 = () => {

    const [nome, setNome] = useState("Miguel");
    const [cidade, setCidade] = useState("São Paulo");
    const [visivel, setVisivel] = useState(false);

    function botaoLimpar() {
        setNome("");
        setCidade("");
    }


    return (
        <div style={estilos.cardAula}>
            <h2>Aula 06 - Estado de um componente</h2>
            <h3>O hook useState nos permite gerenciar o estado de um componente</h3>
            <hr />
            <input type="text" onChange={event => setNome(event.target.value)} value={nome} placeholder="Digite seu nome" />
            <input type="text" onChange={event => setCidade(event.target.value)} value={cidade} placeholder="Digite sua cidade" />
            <p>Olá {nome}!, você mora em {cidade}</p>
            <button onClick={botaoLimpar}>Limpar</button>
            <hr />
            <button onClick={() => setVisivel(!visivel)}>
                {visivel == false ? <p> Ocultar Saldo 🙈 </p> : <p> Mostrar Saldo 👀</p>}
            </button>
            {visivel == false ? <p> R$ 1000,00 </p> : <p> R$ ***,** </p>}
            <hr />
            <Aula06_Contador />
        </div>
    )
}

export default Aula06
