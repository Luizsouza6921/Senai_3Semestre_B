class MagoLuz{
    constructor(nome, idade, nivel_energia = 100 ,nivel_magia = 1){
        super(nome, idade, nivel_energia, nivel_magia)
        this.nome = nome
        this.idade = idade
        this.nivel_energia = nivel_energia
        this.nivel_magia = nivel_magia
        this.casa = "Sonserina"
    }
    FeiticoAssinatura(){
        return this.lancarFeitico("Expelliarmus")
    }
}
    class MagoSombrio extends Pessoa{
    constructor(nome, idade, nivel_energia = 100 ,nivel_magia = 1){
        super(nome, idade, nivel_energia, nivel_magia)
        this.nome = nome
        this.idade = idade
        this.nivel_energia = nivel_energia
        this.nivel_magia = nivel_magia
        this.casa = "Sonserina"
    }
    FeiticoAssinatura(){
        return this.lancarFeitico("Serpensortia")
    }

}

    apresentar(){
        return this.MagoSombrio
    }

    apresentar(){
        return this.MagoLuz
    }

    apresentar(){
        return this.MagoLuz.casa
    }
    apresentar(){
        return this.MagoSombrio.casa
    }