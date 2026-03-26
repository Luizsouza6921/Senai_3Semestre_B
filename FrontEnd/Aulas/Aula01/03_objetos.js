const pais = {
    "nome": "Brasil",
    "capital": "Brasilia",
    "população": 211000000,
    "idioma": "Português",
    "regiao": {
        "sudeste": "São Paulo / Rio de Janeiro / Minas / ES",
        "sul": "PR SC RS",
        "norte": "AM AC RR RO PA AP TO"
    }
}

console.log(pais.capital);
console.log(pais.regiao.sudeste);

// let nome = pais.nome
// let capital = pais.capital
// let população = pais.população
// let idioma = pais.idioma

let { nome, capital, população, idioma } = pais;
console.log(nome, capital, população, idioma);
