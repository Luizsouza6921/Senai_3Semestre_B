import { estilos } from "../style/Estilos"
import { useState, useEffect } from "react"
import Aula13_Produto from "./Aula13_Produto"

const Aula13_CRUD_Produtos = () => {
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

    const [editando, setEditando] = useState(false)
    const [id, setId] = useState('')


    function limparFormulario(){
        setNomeProduto("")
        setPrecoProduto("")
        setImagemProduto("")
        setLinkProduto("")
        setCategoria("")
        setFreteGratis(false)
    }

    async function botaoExcluir(id_produto){
        if (!window.confirm("Tem certeza que deseja excluir este produto?")){
            return
        }
        try {
            const resposta = await fetch(`http://10.130.42.68:3001/produtos/${id_produto}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json'
                },
            })
            
        if(!resposta.ok){
            throw new Error('Erro ao excluir produto ' + resposta.statusText)
        }

        buscarDados()
            
        } catch (erro) {    
            console.error(erro)
        }
    }

    function botaoEditar(produto){
            setNomeProduto(produto.nome)
            setPrecoProduto(produto.preco)
            setImagemProduto(produto.link_imagem)
            setLinkProduto(produto.link_produto)
            setCategoria(produto.categoria)
            setFreteGratis(produto.frete)
            setEditando(true)
            setId(produto.id_produto)
    }

    useEffect(() => {
        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    }, [listaProdutos]);

    useEffect(() => {
        buscarDados();
        limparFormulario()
    }, []);

    async function adicionarProduto() {
        const novoProduto = {
            "nome": nomeProduto,
            "preco": Number(precoProduto) || 0,
            "url_imagem": imagemProduto,
            "url_produto": linkProduto,
            "categoria": categoria,
            "frete_gratis": freteGratis,
        };

        if (!editando) {
            setListaProdutos([...listaProdutos, novoProduto]);
        }

        try {
            if (editando == true){
                endpoint = `http://localhost:3000/produtos/${id}`
                method = 'PUT'
            } else {
                endpoint = 'http://localhost:3000/produtos'
                method = 'POST'
            }
            const resposta = await fetch(endpoint, {
                    method: method,
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(novoProduto)
                });
            
            if(!resposta.ok){
                throw new Error('Erro ao salvar produto ' + resposta.statusText);
            }

            buscarDados();
            
        } catch (erro) {
            console.error(erro);
        }
        
        setNomeProduto("");
        setPrecoProduto("");
        setImagemProduto("");
        setLinkProduto("");
        setCategoria("");
        setFreteGratis(false);
        setEditando(false);
        setId("");
    }
    function limparLista() {
        setListaProdutos([])
    }

    async function buscarDados() {
        try {
            const resposta = await fetch('http://localhost:3000/produtos')
            const dados = await resposta.json()
            setListaProdutos(dados)
        } catch (erro) {
            console.error(erro)
        }
    }
    return (
        <div style={estilos.cardAula}>
            <h2 style={estilos.tituloModulo}>Cadastro de Produtos</h2>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                <input style={estilos.input} type="text" placeholder="Nome do produto" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} />
                <input style={estilos.input} type="text" placeholder="Preço do produto" value={precoProduto} onChange={(e) => setPrecoProduto(e.target.value)} />
                <input style={estilos.input} type="text" placeholder="Link da Imagem" value={imagemProduto} onChange={(e) => setImagemProduto(e.target.value)} />
                <input style={estilos.input} type="text" placeholder="Link do produto" value={linkProduto} onChange={(e) => setLinkProduto(e.target.value)} />
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
                <button style={estilos.botao} onClick={adicionarProduto}>{editando ? 'Editar Produto' : 'Adicionar Produto'}</button>
                <button style={{ ...estilos.botao, backgroundColor: '#6c757d' }} onClick={limparLista}>{editando ? 'Cancelar' : 'Limpar Lista'}</button>
            </div>
            <hr style={{ margin: '20px 0' }} />

            <div style={estilos.gridProdutos}>
                {listaProdutos.map((produto, index) => (
                    <Aula13_Produto
                        key={produto.id_produto || index}
                        nome={produto.nome}
                        preco={produto.preco}
                        imagem={produto.link_imagem}
                        link={produto.link_produto}
                        categoria={produto.categoria}
                        freteGratis={produto.frete}
                        botaoExcluir={() => botaoExcluir(produto.id_produto)}
                        botaoEditar={() => botaoEditar(produto)}
                    />
                ))}
            </div>
        </div>
    )
}
export default Aula13_CRUD_Produtos