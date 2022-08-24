const express = require('express');
const TransacoesRepositorio = require("./transacoes-repositorio")
const app = express()

const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.get('/Hello', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = repositorio.listastransacoes()
    res.send(transacoes)
app.get('/criar-transacao',(req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = {
        valor: 20,
        descricao: "bonbon"
    }
})
  


    res.send("Hello seja bem vindo ao meu word")
})

app.listen(port, () => {
    console.log(`servidor ouvindo na porta ${port}`);
});