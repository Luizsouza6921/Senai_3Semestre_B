import { estilos } from '../style/Estilos'
import { Link, useNavigate } from 'react-router-dom'
const Aula14 = () => {
    const navigate = useNavigate();
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router - Navegação em React </h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em react</h3>
            <hr />
            <h3>Navegação com links do React Router</h3>
            <Link to='/'>Pagina Principal</Link> 
            <br />
            <Link to='/sobre'>Pagina Sobre</Link>
            <br />
            <Link to='/sesisenai'>Pagina Inexistente </Link>
            <br />
            <h3>Navegação com programação utilizando o useNavigate</h3>
            <button onClick={() => navigate('/sobre')}>Pagina Sobre</button>

            <hr />
            <h3>Rota dinâmica com useParams</h3>
            <button onClick={() => navigate('/perfil/Luiz')}>Perfil do Luiz</button>
            <button onClick={() => navigate('/perfil/Diogo')}>Perfil do Diogo</button>
            
    

        </div>
    )
}

export default Aula14