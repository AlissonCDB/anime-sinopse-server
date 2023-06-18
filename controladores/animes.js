const { getTodosAnimes, getAnimePorNome, insereAnime, modificaAnime, deletaAnimePorNome } = require("../servicos/animes")
const fs = require("fs")

function getAnimes(req, res) {
    try {
        const animes = getTodosAnimes()
        res.send(animes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getAnime(req, res) {
    try {
        const nome = req.params.nome
        const anime = getAnimePorNome(nome)
        res.send(anime)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postAnime(req, res) {
    try {
        const animeNovo = req.body
        if (req.body.nome && req.body.sinopse && req.body.imagem) {
            const animes = JSON.parse(fs.readFileSync("animes.json"))
            const animeExistente = animes.find((anime) => anime.nome === animeNovo.nome)
            if (!animeExistente) {
                insereAnime(animeNovo)
                res.status(201)
                res.send("Anime inserido com sucesso")
            } else {
                res.status(400)
                res.send("Esse anime já existe!")
            }
        } else {
            res.status(422)
            res.send("Os campos nome, sinopse e imagem são obrigatórios")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchAnime(req, res) {
    try {
        const nome = req.params.nome
        const body = req.body

        modificaAnime(body, nome)
        res.send("Item modificado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteAnime(req, res) {
    try {
        const nome = req.params.nome

        deletaAnimePorNome(nome)
        res.send("Anime deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getAnimes,
    getAnime,
    postAnime,
    patchAnime,
    deleteAnime

}