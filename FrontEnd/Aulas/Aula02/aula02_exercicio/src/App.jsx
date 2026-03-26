import Cabecalho from "./components/Cabecalho"
import Aula01 from "./components/Aula01"
import Aula02 from "./components/Aula02"
import Aula03 from "./components/Aula03"
import Aula03_Login from "./components/Aula03_Login"
import Aula04 from "./components/Aula04"
import Aula04_IMC from "./components/Aula04_IMC"
import { estilos } from "./style/Estilos"
import Aula04_Filme from "./components/Aula04_Filme"
import Aula05 from "./components/Aula05"
import Aula05_Exercicio from "./components/Aula05_Exercicio"
import Aula06 from "./components/Aula06"
import Aula04_Login from "./components/Aula04_Login"
import Aula06_Calculadora from "./components/Aula06_Calculadora"
import Aula07 from "./components/Aula07"
import Aula07_Perfil from "./components/Aula07_Perfil"
import Aula08 from "./components/Aula08"
import Aula09 from "./components/Aula09"
import Aula09_ListaNomes from "./components/Aula09_ListaNomes"
import Aula09_Numero from "./components/Aula09_Numero"
import Aula10 from "./components/Aula10"
import Aula11 from "./components/Aula11"
import Aula12 from "./components/Aula12"
import Aula12_CEP from "./components/Aula12_CEP"
import Aula13 from "./components/Aula13"
const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecalho aula='React' />
      <main style={estilos.conteudo}>
        <h2>Aulas</h2>
        <div style={estilos.lista_aulas}>
          <Aula01 />
          <Aula02 />
          <Aula03 />
        </div>
        <Aula03_Login />
        <div style={estilos.filmes}>
          <Aula04 />
        </div>
        <Aula04_Login/>
        <Aula05 />
        <Aula05_Exercicio />
        <Aula06 />
        <Aula06_Calculadora />
        <Aula07 />
        <Aula07_Perfil/>
        <Aula08/>
        <Aula09/>
        <Aula09_ListaNomes/>
        <Aula09_Numero/>
        <Aula10/>
        <Aula11/>
        <Aula12/>
        <Aula12_CEP/>
        <Aula13/>
      </main>
    </div>
  )
}

export default App
