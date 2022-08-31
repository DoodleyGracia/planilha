require('dotenv/config')
const express = require('express');
const TransacoesRepositorio = require("./infra/sql-transacoes-repositorio")

const app = express()

const port = 3000;



console.log(process.env)
//Permite acessar o red body
app.use(express.json())
//"serve" 
app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', async (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = await repositorio.listastransacoes()


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
app.post('/transacoes', async (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = req.body
    await repositorio.criarTransacao(transacao)
    res.status(201).send(transacao)



})

app.listen(port, () => {
    console.log(`servidor ouvindo na porta teste ${port}`);
});