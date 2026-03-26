
class Tabela {
    constructor(id, pontuacao = 0, jogador) {
        this.id = id
        this.pontuacao = pontuacao
        this.jogador = jogador
        this.nivel = this.calcularNivel()
    }

    principal() {
        return `${this.jogador} - ${this.pontuacao}`
    }

    AdicionarPontuacao() {
        this.pontuacao += 10
        this.nivel = this.calcularNivel()
    }
    calcularNivel() {
        if(this.pontuacao <= 100) {
            return 'Iniciante'
        }else if(this.pontuacao <= 200) {
            return'Intermediário'
        }else if(this.pontuacao <= 300) {
            return 'Avançado'
        }else {
            return 'Mestre'
        }
    }
    
}

export default Tabela
