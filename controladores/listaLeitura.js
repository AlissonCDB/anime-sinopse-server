const { getTodosLivros, insereLivro } = require("../servicos/listaLeitura")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        if(req.body.Obra &&
            req.body.Volume &&
            req.body.Imagem &&
            req.body.Link &&
            req.body.Capitulo &&
            req.body.Genero) {
                const listaLivros = getTodosLivros()
                const livroExistente = listaLivros.find((livro) => livro.Obra === livroNovo.Obra && livro.Volume === livroNovo.Volume)
                if(!livroExistente) {
                    insereLivro(livroNovo)
                    res.status(201)
                    res.send("Livro adicionado com sucesso")
                } else {
                    res.status(400)
                    res.send("Essa obra já existe!")
                }
            } else {
                res.status(422)
                res.send("Todos os campos devem ser preenchidos")
            }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    postLivro
}