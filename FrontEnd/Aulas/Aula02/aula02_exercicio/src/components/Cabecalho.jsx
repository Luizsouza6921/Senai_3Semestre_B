import logoReact from '../assets/react.svg'
import '../style/cabecalho.css'

const Cabecalho = () => {
    return (
        <header className='cabecalho'>
        <img src={logoReact} alt="" />
        <div>
            <h1>Senai - Desenvolvimento de Sistemas</h1>
            <p>Aulas de Front-end</p>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SENAI_S%C3%A3o_Paulo_logo.png/1280px-SENAI_S%C3%A3o_Paulo_logo.png" alt="" />
        </header>
    )
}

export default Cabecalho