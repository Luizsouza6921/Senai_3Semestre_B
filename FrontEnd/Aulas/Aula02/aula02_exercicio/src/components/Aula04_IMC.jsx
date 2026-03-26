import { estilos } from "../style/Estilos";
const Aula04_IMC = ({nome, peso, altura, cor}) => {
    
    // let nome = 'Miguel';
    // let peso = 75;
    // let altura = 180;
    let imc = peso / (altura ** 2);
    
    return (
        <div>
            <h3>Calculadora de IMC</h3>
            <p style={{color: cor}}>Olá {nome}</p>
            <p>Peso: {peso}kg</p>
            <p>Altura: {altura}cm</p>
            <p>IMC: {imc.toFixed(1)} kg/m²</p>

        </div>
    )
}

export default Aula04_IMC 