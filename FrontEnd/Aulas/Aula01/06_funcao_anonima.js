//Função nomeada
function saudacao(nome){
    console.log(`Tenha um bom dia ${nome}`);
}
//Chamando a função nomeada
saudacao('Miguel');

//Função anonima
const saudacao2 = function (nome){
    console.log(`Tenha um bom dia ${nome}`);
};

saudacao2('Almondega Boy')
//Crie uma função nomeada de somar 2 numeros
function somar(n1, n2){
    let resultado = n1 + n2
    console.log(`Sua soma deu: ${resultado}`)
}
somar(1, 10)

//Transforme essa função em anonima
const somar2 = function(n3, n4){
    let resultado = n3 + n4
    console.log(`Sua soma deu: ${resultado}`)
}
somar(1, 20)