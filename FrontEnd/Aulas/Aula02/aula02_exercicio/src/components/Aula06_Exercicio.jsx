import { estilos } from "../style/Estilos";
import { useState } from "react";

const Aula06_Exercicio = () => {
    const [ponto, setPonto] = useState(0);
    return (
        <div style={estilos.cardAula}>
            <h2>Time Futebol 1: {ponto}</h2>
            <button onClick={() => setPonto(ponto + 1)}>Aumentar</button>
            <button onClick={() => setPonto(ponto - 1)}>Diminuir</button>
            <button onClick={() => setPonto(0)}>Zerar</button>
            <hr />
            <h2>Time Futebol 2: {ponto}</h2>
            <button onClick={() => setPonto(ponto + 1)}>Aumentar</button>
            <button onClick={() => setPonto(ponto - 1)}>Diminuir</button>
            <button onClick={() => setPonto(0)}>Zerar</button>
            <hr />
            <h2>Time Basquete 1: {ponto}</h2>
            <button onClick={() => setPonto(ponto + 1)}>Aumentar +1</button>
            <button onClick={() => setPonto(ponto + 2)}>Aumentar +2</button>
            <button onClick={() => setPonto(ponto + 3)}>Aumentar +3</button>
            <button onClick={() => setPonto(ponto - 1)}>Diminuir</button>
            <button onClick={() => setPonto(0)}>Zerar</button>
            <hr />
            <h2>Time Basquete 2: {ponto}</h2>
            <button onClick={() => setPonto(ponto + 1)}>Aumentar +1</button>
            <button onClick={() => setPonto(ponto + 2)}>Aumentar +2</button>
            <button onClick={() => setPonto(ponto + 3)}>Aumentar +3</button>
            <button onClick={() => setPonto(ponto - 1)}>Diminuir</button>
            <button onClick={() => setPonto(0)}>Zerar</button>
        </div>
    )
}

export default Aula06_Exercicio
