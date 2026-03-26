import { estilos } from "../style/Estilos"
import { useState, useEffect } from "react"
import Aula11_Produto from "./Aula11_Produto"

const Aula11_CadastroProdutos = () => {
    const [listaProdutos, setListaProdutos] = useState(() => {
        const saved = localStorage.getItem("listaProdutos");
        return saved ? JSON.parse(saved) : [];
    })
    const [nomeProduto, setNomeProduto] = useState("")
    const [precoProduto, setPrecoProduto] = useState("")
    const [imagemProduto, setImagemProduto] = useState("")
    const [linkProduto, setLinkProduto] = useState("")
    const [categoria, setCategoria] = useState("")
    const [freteGratis, setFreteGratis] = useState(false)

    useEffect(() => {
        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    }, [listaProdutos]);

    function adicionarProduto(){
        setListaProdutos([...listaProdutos, {
            "nome": nomeProduto,
            "preco": precoProduto,
            "imagem": imagemProduto,
            "link": linkProduto,
            "categoria": categoria,
            "freteGratis": freteGratis,
        }])
        setNomeProduto("")
        setPrecoProduto("")
        setImagemProduto("")
        setLinkProduto("")
        setCategoria("")
        setFreteGratis(false)
    }
    function limparLista(){
        setListaProdutos([])
    }
    return (
        <div style={estilos.cardAula}>
            <h2 style={estilos.tituloModulo}>Cadastro de Produtos</h2>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                <input style={estilos.input} type="text" placeholder="Nome do produto" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}/>
                <input style={estilos.input} type="text" placeholder="Preço do produto" value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)}/>
                <input style={estilos.input} type="text" placeholder="Link da Imagem" value={imagemProduto} onChange={(e) => setImagemProduto(e.target.value)}/>
                <input style={estilos.input} type="text" placeholder="Link do produto" value={linkProduto} onChange={(e) => setLinkProduto(e.target.value)}/>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <select name="categoria" id="categoria" style={estilos.input} value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Categoria</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="roupas">Roupas</option>
                    <option value="alimentos">Alimentos</option>
                </select>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', marginTop: '5px' }}>
                    <input type="checkbox" checked={freteGratis} onChange={(e) => setFreteGratis(e.target.checked)} /> Frete Grátis
                </label>
            </div>
            
            <div style={estilos.botaoContainer}>
                <button style={estilos.botao} onClick={adicionarProduto}>Adicionar</button>
                <button style={{ ...estilos.botao, backgroundColor: '#6c757d' }} onClick={limparLista}>Limpar Lista</button>
            </div>
            <hr style={{ margin: '20px 0' }} />
            
            <div style={estilos.gridProdutos}>
                {listaProdutos.map((produto, index) => (
                    <Aula11_Produto 
                        key={index} 
                        nome={produto.nome} 
                        preco={produto.preco} 
                        imagem={produto.imagem} 
                        link={produto.link}
                        categoria={produto.categoria}
                        freteGratis={produto.freteGratis}
                    />
                ))}
            </div>
        </div>
    )
}
export default Aula11_CadastroProdutos