import { estilos } from "../style/Estilos"
import jogo from '../assets/img/jogo.png'

const Aula08 = () => {
    return (
        <div style={estilos.cardAula}>
            <h1>Aula 08 - Revisão</h1>
            <h3>Revisão de conteúdo com o Jogo Número Secreto</h3>
            <a href="https://jogo-numero-secreto-blond-zeta.vercel.app/"><img src={jogo} style={{width: '100%'}} />Link do Jogo</a>
        </div>
    )
}

export default Aula08