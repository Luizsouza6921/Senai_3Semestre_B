import { Link, useParams } from "react-router-dom"

function Filme() {
    const { Filme } = useParams();
    return (
        <div>
            <h1>Filme { Filme } </h1>
        
            <Link to="/">Voltar para Principal</Link>
        </div>
    )


}

export default Filme