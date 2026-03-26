import { estilos } from "../style/Estilos"
import { useState } from "react"
import { useEffect } from "react"
const Aula12_CEP = () => {
    const [cep, setCep] = useState('')
    const [dados, setDados] = useState({})
    const buscarDados = async () => {
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const dados = await resposta.json()
            setDados(dados)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        buscarDados()
    }, [])
    return (
        <div style={estilos.cardAula}>
            <h2 style={estilos.tituloModulo}>Aulas 12 - Consulta de CEP</h2>
            <hr />
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'center' }}>
                <input 
                    style={{ ...estilos.input, marginBottom: 0, flex: 1 }} 
                    type="text" 
                    placeholder="Digite o CEP (apenas números)"
                    value={cep} 
                    onChange={(e) => setCep(e.target.value)} 
                />
                <button style={{ ...estilos.botao, width: 'auto' }} onClick={buscarDados}>Buscar</button>
            </div>

            {dados.logradouro && (
                <div style={{ ...estilos.cardAula, backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
                    <p><strong>CEP:</strong> {dados.cep || cep}</p>
                    <p><strong>Logradouro:</strong> {dados.logradouro}</p>
                    <p><strong>Bairro:</strong> {dados.bairro}</p>
                    <p><strong>Cidade:</strong> {dados.localidade || dados.cidade}</p>
                    <p><strong>UF:</strong> {dados.uf}</p>
                </div>
            )}
        </div>
    )
}
export default Aula12_CEP