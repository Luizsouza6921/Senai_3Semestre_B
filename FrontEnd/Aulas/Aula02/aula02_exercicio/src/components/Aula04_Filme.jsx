import { estilos } from '../style/Estilos'

const Aula04_Filme = ( {titulo, genero, imagem} ) => {
    return(
        <div style={estilos.filmes}>
            <div style={estilos.cardFilme}>
                <img src={imagem} alt={titulo} style={estilos.imagens_filme} />
                <p>Titulo: {titulo}</p>
                <p>Genero: {genero}</p>
                <button style={estilos.botao}>Assistir</button>
            </div>
        </div>
    )
}

export default Aula04_Filme
