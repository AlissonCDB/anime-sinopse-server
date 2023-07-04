const fs = require("fs")
const livros = "listaLeitura.json"

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(livros))
}

function insereLivro(livroNovo) {
    const listaLeitura = JSON.parse(fs.readFileSync(livros))
    const novaListaLeitura = [...listaLeitura, livroNovo]

    fs.writeFileSync(livros, JSON.stringify(novaListaLeitura))
}

module.exports = {
    getTodosLivros,
    insereLivro
}