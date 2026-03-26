import '../style/Aula03.css'
import { estilos } from '../style/Estilos'

const Aula03 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aulas 03 - Componentes e estilização</h2>
            <h3>Criação de componentes reutilizaveis e suas estilizações para melhorar a UI</h3>
            <p>Aprendemos os fundamentos do React, a criação e o conhecimento da estrutura do primeiro projeto.</p>

            <hr />
            <p className='texto'>CSS Externo</p>
            <p className='descricao'>A forma mais simples e classico</p>

            <hr />
            <p style={ {color: 'blue', fontWeight: 'bold'} }>Estilização Inline</p>
            <p style={{fontStyle: 'italic'}}>Estilos aplicados diretamente nos elementos como OBJETOS</p>

            <hr />
            <p style={ estilos.tituloModulo }>Css Modules</p>
            <p style={ estilos.descricaoModulo }>Css modularizado é a forma mais </p>
        </div>
    )
}
export default Aula03