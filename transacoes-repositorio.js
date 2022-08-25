let transacoes = {
    transacoes: [
        {
            valor: 20,
            descricao: "bonbon", categoria: "despesa"
        },
        {
            valor: 5,
            descricao: "doce", categoria: "despesa"
        }
    ],
    saldo: 0
}
class TransacoesRepositorio {

    listastransacoes() {
        return transacoes
    }
    criartransacao(transacao) {
        transacoes.transacoes.push(transacao)
        return transacoes
    }
}

module.exports = TransacoesRepositorio