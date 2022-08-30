const { Pool } = require('pg')
const pool = new Pool()
pool.query('')

class SqlTransacoesRepositorio {
    async listastransacoes() {
        const resultado = await pool.query('SELECT * FROM transacoes')
        console.log(resultado.rows)
        return {
            transacoes: resultado.rows
        }
    }
    async criarTransacao(transacao) {
        const consulta = `INSERT INTO transacoes(valor, descricao, cetegoria)
        VALEUS ( $1,$2,$3) RETUNING*`;
        const valores = [
            transacao.valor,
            tansacao.descricao,
            transacao.categoria
        ];
        await pool.query(consulta, valores)


    }

}

module.exports = SqlTransacoesRepositorio