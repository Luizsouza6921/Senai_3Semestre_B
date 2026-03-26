import { estilos } from "../style/Estilos"
import Aula13_CRUD_Produtos from "./Aula13_CRUD_Produtos"
import Aula13_Produto from "./Aula13_Produto"
import Aula13_CRUD_Usuarios from "./Aula13_CRUD_Usuarios"

const Aula13 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aulas 13 - CRUD com Api</h2>
            <h3>Cria um CRUD utilizando API desenvolvida em backend</h3>
            <hr />
            <Aula13_CRUD_Produtos/>
            <hr style={{ margin: '40px 0' }} />
            <Aula13_CRUD_Usuarios />
        </div>
    )
}
export default Aula13