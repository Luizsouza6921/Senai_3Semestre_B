class MagoLuz{
    constructor(nome, magia = 1){
        super(nome, magia)
        this.nome = nome
        this.casa = "Sonserina"
    }
    FeiticoAssinatura(){
        return this.lancarFeitico("Expelliarmus")
    }
}
    class MagoSombrio extends Pessoa{
    constructor(nome, magia){
        super(nome, magia);
        this.nome = nome
        this.casa = "Grifinoria"
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



