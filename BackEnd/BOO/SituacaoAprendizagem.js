class heroi {
    nome;
    idade;
    #poder;
    energia;

    constructor(nome, idade, poder){
        this.nome=nome
        this.idade=idade
        this.#poder=poder
        this.energia= 100
    }
    apresentar(){
        return `${this.nome, this.idade, this.#poder, this.energia}`;
    }
}


class Guerreiro extends heroi {
    constructor(nome, espada){
        super(nome)
        this.espada
    }
    FeiticoAssinatura(){
        return this.lancarFeitico("Smash")
    }
}
class Mago extends heroi {
    constructor(nome, cajado){
        super(nome)
        this.cajado
    }
    FeiticoAssinatura(){
        return this.lancarFeitico("Magic Missile")
    }
}

let Heroi = new heroi("Miguel", 17, "Manipulação de Sangue", 100)
console.log(heroi);
let guerreiro = new Guerreiro("He-Man","Excalibur")
console.log(guerreiro.apresentar);
let mago = new Mago("Jhones", "Cajado de Madeira")
console.log(mago.apresentar);


