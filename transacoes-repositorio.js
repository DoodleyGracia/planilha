class TransacoesRepositorio {
    transacoes = {
        transacoes: [
            {
                valor: 20,
                decricao: "bonbon"
            },
            {
                valor: 5,
                descricoa: "doce"
            }
        ]
    }
    listastransacoes() {
        return this.transacoes
    }
    criartransacao(transacao){
        const lista = this.transacoes.transacoes
    }
}

module.exports = TransacoesRepositorio