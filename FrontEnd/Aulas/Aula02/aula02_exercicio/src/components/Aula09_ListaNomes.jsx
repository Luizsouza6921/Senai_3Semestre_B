import { estilos } from "../style/Estilos"
import { useState, useEffect } from "react"
import Aula09_Nome from "./Aula09_Nome"

const Aula09_ListaNomes = () => {
    const [nomeInput, setNomeInput] = useState("")
    const [itemInput] = useState([
        "Picanha",
        "Pão de alho",
        "Cerveja"
    ])

    const [listaPresenca, setListaPresenca] = useState(() => {
        const saved = localStorage.getItem("listaPresenca")
        return saved ? JSON.parse(saved) : [
            {
                "nome": "Miguel",
                "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadtVy7uMdNsj4xbexQFWZqAeWcMch6-SZyg&s",
                "item": "Picanha"
            },
            {
                "nome": "Maria",
                "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadtVy7uMdNsj4xbexQFWZqAeWcMch6-SZyg&s",
                "item": "Pão de alho"
            },
            {
                "nome": "Pedro",
                "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadtVy7uMdNsj4xbexQFWZqAeWcMch6-SZyg&s",
                "item": "Cerveja"
            }
        ]
    })

    useEffect(() => {
        localStorage.setItem("listaPresenca", JSON.stringify(listaPresenca))
    }, [listaPresenca])

    function adicionarPessoa() {
        if (nomeInput !== "") {
            const randomItem = itemInput[Math.floor(Math.random() * itemInput.length)]
            setListaPresenca([...listaPresenca, {
                "nome": nomeInput,
                "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadtVy7uMdNsj4xbexQFWZqAeWcMch6-SZyg&s",
                "item": randomItem
            }])
            setNomeInput("")
        }
    }

    function excluirPessoa(index) {
        setListaPresenca(listaPresenca.filter((_, i) => i !== index))
    }

    function limparLista() {
        setListaPresenca([])
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Lista de presença churrasco</h2>
            <hr />
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                value={nomeInput}
                onChange={(e) => setNomeInput(e.target.value)}
            />
            <button onClick={adicionarPessoa}>Adicionar</button>
            <button onClick={limparLista}>Limpar lista</button>
            {
                listaPresenca.map((pessoa, index) => (
                    <Aula09_Nome 
                        key={index} 
                        nome={pessoa.nome} 
                        item={pessoa.item} 
                        excluir={() => excluirPessoa(index)}
                    />
                ))
            }
        </div>
    )
}

export default Aula09_ListaNomes