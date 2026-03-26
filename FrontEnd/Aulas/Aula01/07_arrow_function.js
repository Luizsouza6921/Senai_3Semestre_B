const saudacao2 = function (nome){
    console.log(`Tenha um bom dia ${nome}`);
};
saudacao2('Miguel');

//Arrow function
const saudacao3 = (nome) => {
    console.log(`Tenha um bom dia ${nome}`);
};

const somar2 = (n3, n4) =>{
    let resultado = n3 + n4
    console.log(`Sua soma deu: ${resultado}`)
}
somar2(1, 20)