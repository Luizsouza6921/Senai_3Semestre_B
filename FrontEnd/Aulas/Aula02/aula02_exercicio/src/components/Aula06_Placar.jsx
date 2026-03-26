import { estilos } from "../style/Estilos";
import { useState } from "react";

const Aula06_Contador = () => {
    const [time1, SetTime1] = useState(0);
    const [time2, SetTime2] = useState(0);
    const [basket1, SetBasket1] = useState(0)
    const [basket2, SetBasket2] = useState(0)

    function limpar1 () {
        SetTime1(0);
        SetTime2(0);
    }
    return (
        <div style={estilos.cardAula}>
            <h2>Placar Futebol</h2>
            <p>Palmeiras: {time1}</p>
            <p>Corinthians: {time2}</p>
            <button onClick={() => SetTime1(time1 + 1)}>+1</button>
            <button onClick={() => SetTime2(time2 + 1)}>+1</button>
            <button onClick={limpar}>Limpar</button>
            <hr />
            <div>
            <h2>Placar Basketball</h2>
            <p>Warriors: {basket1}</p>
            <p>Lakers: {basket2}</p>
            <button onClick={() => SetBasket1(basket1 + 1)}>+1</button>
            <button onClick={() => SetBasket2(basket2 + 1)}>+1</button>
            </div>
        </div>
        

    )
}