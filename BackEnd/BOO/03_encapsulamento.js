class Pessoa {
    nome;
    idade;

    constructor(nome, idade, documento){
        this.nome = nome;
        this.idade = idade;
        this.#documento = documento;
    }

    apresentar(){
        return `${this.nome}, ${this.idade}`
    }
    mostrarDocumento(){
        return this.#documento;
    }
}

const pessoa1 = new Pessoa('Silva', 28, '123456789')
console.log(pessoa1.apresentar());
