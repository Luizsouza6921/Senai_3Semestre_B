import React, { useState } from 'react';
import { estilos } from '../style/Estilos';

const Calculadora = () => {
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [operacao, setOperacao] = useState("soma");
    const [resultado, setResultado] = useState("");

    const calcular = () => {
        const n1 = Number(numero1);
        const n2 = Number(numero2);
        let res;

    // O Switch foi usado para a outra calculadora que foi feita nas aulas antigas
        switch (operacao) {
            case "soma":
                res = n1 + n2;
                break;
            case "subtracao":
                res = n1 - n2;
                break;
            case "multiplicacao":
                res = n1 * n2;
                break;
            case "divisao":
                res = n2 !== 0 ? n1 / n2 : "Erro (Divisão por zero)";
                break;
            default:
                res = "";
        }
        setResultado(res);
    };

    const limpar = () => {
        setNumero1("");
        setNumero2("");
        setResultado("");
        setOperacao("soma");
    };

    return (
        <div style={estilos.container}>
            <input 
                type="number" 
                value={numero1} 
                onChange={(e) => setNumero1(e.target.value)} 
                placeholder="Número 1"
            />
            <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
                <option value="soma">+</option>
                <option value="subtracao">-</option>
                <option value="multiplicacao">*</option>
                <option value="divisao">/</option>
            </select>
            <input 
                type="number" 
                value={numero2} 
                onChange={(e) => setNumero2(e.target.value)} 
                placeholder="Número 2"
            />
            <button onClick={calcular}>Calcular</button>
            <button onClick={limpar}>Limpar</button>
            <p>Resultado: {resultado}</p>
        </div>
    );
};

export default Calculadora;