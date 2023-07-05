const express = require("express")
const rotaAnime = require('./rotas/animes')
const cors = require("cors")
const rotaLivro = require("./rotas/listaLeitura")

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next()
})

app.use('/animes', rotaAnime)
app.use('/listaLeitura', rotaLivro)

const port = '8000'

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})