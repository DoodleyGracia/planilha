let 'transacoes = {
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
class TransacoesRepositorio {
  
    listastransacoes() {
        return transacoes
    }
    criartransacao(transacao){
     transacoes.transacoes.push(transacao)
     return transacoes
    }
}

module.exports = TransacoesRepositorio