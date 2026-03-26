import { estilos } from "../style/Estilos"

const Aula09_Nome = ({ nome, item, excluir, index }) => {
    return (
        <div style={estilos.perfilContainer}>
            <div>
                <p>{nome} vai levar {item}</p>
            </div>
            <button onClick={() => excluir(index)}>Delete</button>
        </div>
    )
}

export default Aula09_Nome