class Pessoa{
    constructor(nome,idade,feitico,casa,nivel_magia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel_magia = nivel_magia;
    }
}

const pessoa1 = new Pessoa(Miguel, 16, "Wingadium Leviosa", "Sonserina", 25)
const pessoa2 = new Pessoa(Henry, 17, "Lumos", "Grifinoria", 25)
const pessoa3 = new Pessoa(Miguel, 16, "Estupefaça", "Ravenclaw", 25)

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);



