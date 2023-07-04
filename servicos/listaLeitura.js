const fs = require("fs")
const livros = "listaLeitura.json"

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(livros))
}


module.exports = {
    getTodosLivros
}