import { estilos } from "../style/Estilos"
import Aula04_Filme from "./Aula04_Filme"
import Aula04_IMC from "./Aula04_IMC"

const Aula04 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aulas 04 - Props</h2>
            <h3>Criação de componentes reutilizaveis e suas utilizações</h3>
            <hr />
            <Aula04_IMC />
            <Aula04_IMC nome='Miguel' peso={80} altura={1.80} cor={'#33ff00'}  />
            <Aula04_IMC nome='Nicolas' peso={102} altura={1.80} cor={'#0015ff'} />
            <Aula04_IMC nome='Felipe' peso={70} altura={1.80} cor={'#f01e2c'}/>
        </div>,
        <div style={estilos.filmes}>
            <Aula04_Filme titulo="Matrix" genero="Ficção Cientifica" imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRo8fLSMqYGtQp8tWxZo9qNIruk0X1A2kVw&s"/>
            <Aula04_Filme titulo="O Ilusionista" genero="Romance/Thriller" imagem="https://upload.wikimedia.org/wikipedia/pt/3/3e/The_Illusionist.jpg"/>
            <Aula04_Filme titulo="John Wick" genero="Ação/Thriller" imagem="https://upload.wikimedia.org/wikipedia/pt/1/13/John_wick_ver3.jpg"/>
        </div>
    )
}
export default Aula04