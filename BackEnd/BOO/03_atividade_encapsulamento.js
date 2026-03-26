class bruxo{
    nome;
    nivel_magia = 10;
    #energia_Magica = 100;

    constructor(nome, energia_Magica, nivel_magia){
        this.nome = nome;
        this.#energia_Magica = energia_Magica;
        this.nivel_magia = nivel_magia;
    }
    VerEnergia(){
        return `${this.#energia_Magica}`
    }
    RecarregarEnergia(){
        this.#energia_Magica = this.#energia_Magica + 10;
        return this.#energia_Magica
    }
    Atacar(){
        this.#energia_Magica = this.#energia_Magica - 10;
        return this.#energia_Magica
    }
    apresentar(){
        return `${this.nome}, ${this.nivel_magia}`
    }
}

const bruxo1 = new bruxo('Miguel', 10, 100)
console.log(bruxo1.Atacar);
console.log(bruxo1.RecarregarEnergia);
console.log(bruxo1.VerEnergia);

