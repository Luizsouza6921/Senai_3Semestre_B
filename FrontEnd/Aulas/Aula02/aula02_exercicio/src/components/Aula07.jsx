import { estilos } from "../style/Estilos";
import Aula07_Multicomponentes, { enderecoServidor, MeuComponenteNomeado, MeuComponenteNomeado2 } from "./Aula07_Multicomponentes";

const Aula07 = () => {
    return(
        <div style={estilos.cardAula}>
            <h2>Aula 07 - Importação e exportação de Modulos</h2>
            <h3>Compreendendo importação e exportação padrão ou nomeada</h3>
            <hr />

           <Aula07_Multicomponentes/>
           <MeuComponenteNomeado/>
           <MeuComponenteNomeado2/>
           <p>{enderecoServidor}</p>
        </div>
    )
}

export default Aula07