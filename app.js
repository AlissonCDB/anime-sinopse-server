const express = require("express")
const rotaAnime = require('./rotas/animes')
const cors = require("cors")
const rotaLivro = require("./rotas/listaLeitura")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/animes', rotaAnime)
app.use('/listaLeitura', rotaLivro)

const port = '8000'

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})