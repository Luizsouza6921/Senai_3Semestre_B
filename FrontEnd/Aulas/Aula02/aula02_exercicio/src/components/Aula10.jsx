import { useState } from "react"
import { estilos } from "../style/Estilos"
import { useEffect } from "react"


const Aula10 = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log(contador);
        document.title = `Contador: ${contador}`
    }, [contador])

    useEffect(() => {
        const contadorSalvo = localStorage.getItem('valorContador') || 0;
        setContador(JSON.parse(contadorSalvo))
    }, [])

    function BotaoContador() {
        const novoContador = contador + 1
        setContador(novoContador)
        localStorage.setItem("ValorContador", JSON.stringify(novoContador))
    }




    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)} >Clique aqui</button>
        </div>
    )
}


export default Aula10