import { estilos } from "../style/Estilos"

const Aula11_Produto = ({ nome, preco, imagem, link, categoria, freteGratis }) => {
    return (
        <div style={estilos.cardProduto}>
            <img src={imagem} alt={nome} style={estilos.imagemProduto} />
            <div style={{ padding: '5px' }}>
                <span style={estilos.categoriaBadge}>{categoria}</span>
                <h3 style={estilos.nomeProduto}>{nome}</h3>
                <p style={estilos.precoProduto}>R$ {preco}</p>
                {freteGratis && <span style={estilos.badgeFrete}>Frete Grátis</span>}
                <div style={{ marginTop: '10px' }}>
                    <a href={link} target="_blank" rel="noreferrer" style={{ ...estilos.botao, textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                        Ver Detalhes
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Aula11_Produto