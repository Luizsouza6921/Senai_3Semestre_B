class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    apresentar(){
        return `${this.nome}`;
    }
}

class PessoaFisica extends Pessoa{
    constructor(nome, cpf){
        super(nome);
    }
}

class PessoaJuridica extends Pessoa{
    cnpj;
    constructor(nome, cnpj){
        super(nome);
        this.cnpj = cnpj
    }
}

const sesi = new PessoaJuridica("Sesi - Andradina", "123.456.789.20");
console.log(sesi.apresentar());
const miguel = new PessoaJuridica("Miguel", "456.324.789.20");
console.log(miguel.apresentar());
