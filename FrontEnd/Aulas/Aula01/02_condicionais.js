let idade = 61;

if (idade >= 18) {
    console.log("voce é adulto");
} else if (idade > 12 && idade <  17) {
    console.log("Voce é Adolescente");
} else if (idade < 18) {
    console.log("Você é menor de idade");
}

// Outro

let tema = 'Dark';
let CordeFundo = 'White';

if (tema == 'Dark') {
    CordeFundo = 'Preto'
} else {
    CordeFundo = 'Branco'
}

tema == 'Dark' ? CordeFundo = 'Preto' : CordeFundo = 'Branco';