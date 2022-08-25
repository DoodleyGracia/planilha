const express = require('express');
const TransacoesRepositorio = require("./transacoes-repositorio")
const app = express()
app.use(express.json())
const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = repositorio.listastransacoes()


    let saldo = 0
    transacoes.transacoes.forEach((transacao) => {
        if (transacao.categoria === "despesa") {
            saldo = saldo - transacao.valor
        }
        if (transacao.categoria === "receita") {
            saldo = saldo + transacao.valor
        }
    }

    )

    transacoes.saldo = saldo
    res.send(transacoes)
})
app.post('/transacoes', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = req.body
    repositorio.criartransacao(transacao)
    res.status(201).send(transacao)



})

app.listen(port, () => {
    console.log(`servidor ouvindo na porta teste ${port}`);
});