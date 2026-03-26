const Aula09_Numero = ({numero, index, excluir}) => {
    return(
        <p> 
            {numero}
            <button onClick={() => excluir(numero)}>Excluir</button> 
        </p>
    )
}

export default Aula09_Numero