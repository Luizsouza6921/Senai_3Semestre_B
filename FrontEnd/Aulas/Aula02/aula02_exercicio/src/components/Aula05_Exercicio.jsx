import React from "react";

const Aula05_Exercicio = () => {
    const colorMap = {
        a: "#2200ff",
        p: "#000000",
        v: "#ff0000",
        y: "#fff700",
        g: "#44ff00",
    };

    function cliqueAqui() {
        alert("Você clicou no Botão");
        console.log("Botão clicado");
    }

    function cliqueAqui2() {
        alert("Você clicou duas vezes no Botão");
        console.log("Botão clicado duas vezes");
    }

    function entradaMouse() {
        console.log("Você entrou com o mouse");
    }

    function saidaMouse() {
        console.log("Você saiu com o mouse");
    }

    function colors(event) {
        if (colorMap[event.key]) {
            event.target.style.backgroundColor = colorMap[event.key];
        }
    }

    function colorSize(event) {
        if (colorMap[event.key]) {
            event.target.style.backgroundColor = colorMap[event.key];
        } else if (event.key === "+") {
            const currentSize = parseInt(window.getComputedStyle(event.target).fontSize);
            event.target.style.fontSize = `${currentSize + 2}px`;
        } else if (event.key === "-") {
            const currentSize = parseInt(window.getComputedStyle(event.target).fontSize);
            event.target.style.fontSize = `${currentSize - 2}px`;
        }
    }

    return (
        <div>
            <p>👇</p>
            <button onClick={cliqueAqui}>Clique Aqui 1</button>
            <button onDoubleClick={cliqueAqui2}>Clique Aqui 2 (Double Click)</button>
            <hr />
            <p>👇</p>
            <input
                onChange={(event) => console.log(event.target.value)}
                type="text"
                placeholder="Digite Aqui O Que Você É:"
            />
            <select onChange={(event) => console.log(event.target.value)}>
                <option value="QI">Inteligente</option>
                <option value="BNT">Bonito</option>
                <option value="Corage">Corajoso</option>
            </select>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMouse} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '5px', display: 'inline-block' }}>
                Passe o Mouse Aqui
            </p>
            <hr />
            <input type="text" onKeyDown={event => alert(event.key)} placeholder="Pressione uma tecla" />
            <input type="text" onKeyDown={colors} placeholder="a, p, v, y, g para cores" />
            <hr />
            <label>Aqui Tem Tudo! </label>
            <input
                type="text"
                onClick={cliqueAqui}
                onChange={(event) => console.log(event.target.value)}
                placeholder="Digite Aqui O Que Você É:"
                onMouseEnter={entradaMouse}
                onMouseLeave={saidaMouse}
                onKeyDown={colorSize}
            />
        </div>
    );
};

export default Aula05_Exercicio;