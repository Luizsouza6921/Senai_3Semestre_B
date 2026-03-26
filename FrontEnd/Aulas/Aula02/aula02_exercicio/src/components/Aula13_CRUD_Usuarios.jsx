import { estilos } from "../style/Estilos"
import { useState, useEffect } from "react"
import Aula13_Usuario from "./Aula13_Usuario"

const Aula13_CRUD_Usuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState(() => {
        const saved = localStorage.getItem("listaUsuarios");
        return saved ? JSON.parse(saved) : [];
    })
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [editando, setEditando] = useState(false)
    const [id, setId] = useState("")

    useEffect(() => {
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    }, [listaUsuarios]);

    // Busca os dados da API ao montar o componente
    useEffect(() => {
        buscarDados();
    }, []); 

    async function adicionarUsuario() {
        const novoUsuario = {
            "nome": nome,
            "email": email,
            "senha": senha,
        };

        if (!editando) {
            setListaUsuarios([...listaUsuarios, novoUsuario]);
        }

        try {
            let endpoint;
            let method;
            if (editando == true){
                endpoint = `http://10.130.42.68:3001/usuarios/${id}`
                method = 'PUT'
            } else {
                endpoint = 'http://10.130.42.68:3001/usuarios'
                method = 'POST'
            }
            const resposta = await fetch(endpoint, {
                    method: method,
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(novoUsuario)
                });
            
            if(!resposta.ok){
                throw new Error('Erro ao salvar usuário ' + resposta.statusText);
            }

            buscarDados();
            
        } catch (erro) {
            console.error(erro);
        }
        
        setNome("");
        setEmail("");
        setSenha("");
        setEditando(false);
        setId("");
    }

    async function botaoExcluir(id_usuario){
        if (!window.confirm("Tem certeza que deseja excluir este usuário?")){
            return
        }
        try {
            const resposta = await fetch(`http://10.130.42.68:3001/usuarios/${id_usuario}`, {
                method: 'DELETE'
            })
            if(!resposta.ok){
                throw new Error('Erro ao excluir usuário ' + resposta.statusText)
            }
            buscarDados()
        } catch (erro) {
            console.error(erro)
        }
    }
    
    function botaoEditar(usuario){
        setNome(usuario.nome)
        setEmail(usuario.email)
        setSenha(usuario.senha)
        setEditando(true)
        setId(usuario.id_usuario)
    }
    
    function limparLista(){
        setListaUsuarios([])
    }

    async function buscarDados() {
        try {
            const resposta = await fetch('http://10.130.42.68:3001/usuarios')
            const dados = await resposta.json()
            setListaUsuarios(dados)
        } catch (erro) {
            console.error('Erro ao buscar usuários:', erro)
        }
    }

    
    
    return (
        <div style={estilos.cardAula}>
            <h2 style={estilos.tituloModulo}>Cadastro de Usuários</h2>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                <input style={estilos.input} type="text" placeholder="Nome do usuário" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input style={estilos.input} type="email" placeholder="Email do usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input style={estilos.input} type="password" placeholder="Senha do usuário" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </div>
            
            <div style={estilos.botaoContainer}>
                <button style={estilos.botao} onClick={adicionarUsuario}>{editando ? 'Editar Usuário' : 'Adicionar Usuário'}</button>
                <button style={{ ...estilos.botao, backgroundColor: '#6c757d' }} onClick={limparLista}>Limpar Lista</button>
                <button style={{ ...estilos.botao, backgroundColor: '#17a2b8' }} onClick={buscarDados}>Atualizar da API</button>
            </div>
            <hr style={{ margin: '20px 0' }} />
            
            <div style={estilos.gridProdutos}>
                {listaUsuarios.map((usuario, index) => (
                    <Aula13_Usuario 
                        key={usuario.id_usuario || index} 
                        nome={usuario.nome} 
                        email={usuario.email} 
                        senha={usuario.senha}
                        botaoExcluir={() => botaoExcluir(usuario.id_usuario)}
                        botaoEditar={() => botaoEditar(usuario)}
                    />
                ))}
            </div>
        </div>
    )
}
export default Aula13_CRUD_Usuarios
