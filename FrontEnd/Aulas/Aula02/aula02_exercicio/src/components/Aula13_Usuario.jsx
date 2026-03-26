import { estilos } from "../style/Estilos"

const Aula13_Usuario = ({ nome, email, senha, botaoExcluir, botaoEditar }) => {
    return (
        <div style={estilos.cardProduto}>
            <div style={{ padding: '20px' }}>
                <h3 style={estilos.nomeProduto}>{nome}</h3>
                <p style={estilos.precoProduto}>{email}</p>
                <p style={estilos.precoProduto}>{senha}</p>
            </div>
            <button style={{ ...estilos.botao, backgroundColor: '#dc3545' }} onClick={botaoExcluir}>Excluir</button>
            <button style={{ ...estilos.botao, backgroundColor: '#17a2b8' }} onClick={botaoEditar}>Editar</button>
        </div>
    )
}
export default Aula13_Usuario
