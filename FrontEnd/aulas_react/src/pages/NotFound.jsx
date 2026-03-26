import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>Pagina Nao Encontrada</h1>
            {/* <a href="/"> </a> */}
            <Link to="/">Voltar para Principal</Link>
        </div>
    )


}

export default NotFound