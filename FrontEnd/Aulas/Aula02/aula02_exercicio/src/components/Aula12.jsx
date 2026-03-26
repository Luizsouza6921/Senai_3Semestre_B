import { estilos } from "../style/Estilos"
import { useState } from "react"
import { useEffect } from "react"
const Aula12 = () => {
    const [produto, setProduto] = useState({})
    const [idPesquisa, setIdPesquisa] = useState('')
    const [imagem, setImagem] = useState('')

    const buscarDados = async () => {
        try {
            const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
            const dados = await resposta.json()
            setImagem(dados.message)
        } catch (error) {
            console.log(error);
        }
    }

    const buscarProduto = async () => {
        if (!idPesquisa) return;
        try {
            const resposta = await fetch(`https://fakestoreapi.com/products/${idPesquisa}`)
            const dados = await resposta.json()
            setProduto(dados)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardAula}>
            <h2 style={estilos.tituloModulo}>Aulas 12 - Consumo de APIs</h2>
            <h3>Aprendendo a utilizar APIs em React</h3>
            <hr />
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <p><strong>API de Cachorros:</strong></p>
                <img src={imagem} alt="Cachorro" style={{ maxWidth: '300px', borderRadius: '10px', display: 'block', margin: '10px auto' }} />
                <button style={estilos.botao} onClick={buscarDados}>Trocar Cachorro</button>
            </div>

            <hr />
            
            <div style={{ marginTop: '20px' }}>
                <p><strong>Buscar Produto por ID:</strong></p>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <input 
                        style={{ ...estilos.input, marginBottom: 0, flex: 1 }} 
                        type="number" 
                        placeholder="ID do Produto (ex: 1)"
                        value={idPesquisa}
                        onChange={(e) => setIdPesquisa(e.target.value)}
                    />
                    <button style={{ ...estilos.botao, width: 'auto' }} onClick={buscarProduto}>Buscar</button>
                </div>

                {produto.id && (
                    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center' }}>
                        <p style={{ color: '#999', fontSize: '0.8rem' }}>ID do Produto: {produto.id}</p>
                        <img src={produto.image} alt={produto.title} style={{ maxWidth: '150px', height: '150px', objectFit: 'contain', margin: '10px auto' }} />
                        <h4 style={{ margin: '10px 0' }}>{produto.title}</h4>
                        <p style={{ fontWeight: 'bold', color: '#2ecc71', fontSize: '1.2rem' }}>R$ {produto.price}</p>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>{produto.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Aula12