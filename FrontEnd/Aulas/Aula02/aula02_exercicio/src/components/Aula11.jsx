import { estilos } from "../style/Estilos"
import Aula11_CadastroProdutos from "./Aula11_CadastroProdutos"

const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aulas 11 - Cadastro de Produtos</h2>
            <h3>Criando uma lista de produtos e armazenando os dados localmente</h3>
            <Aula11_CadastroProdutos />
        </div>
    )
}
export default Aula11