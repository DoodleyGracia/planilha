const express = require('express');
const TransacoesRepositorio = require("./transacoes-repositorio")
const app = express()
app.use(express.json())
const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.get('/Hello', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = repositorio.listastransacoes()
    res.send(transacoes)
})
app.post('/criar-transacao',(req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = req.body
    repositorio.criartransacao(transacao)
      res.status(201).send(transacao)
    
})
  
app.listen(port, () => {
    console.log(`servidor ouvindo na porta teste ${port}`);
});