import { Link, useParams } from "react-router-dom"

function Perfil() {
    const { nome } = useParams();
    return (
        <div>
            <h1>Perfil do { nome } </h1>
        
            <Link to="/">Voltar para Principal</Link>
        </div>
    )


}

export default Perfil