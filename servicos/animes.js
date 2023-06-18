const fs = require("fs")

function getTodosAnimes() {
    return JSON.parse(fs.readFileSync("animes.json"))
}

function getAnimePorNome(nome) {
    const animes = JSON.parse(fs.readFileSync("animes.json"))

    const animeFiltrado = animes.filter( anime => anime.nome === nome)
    return animeFiltrado
}

function insereAnime(animeNovo) {
    const animes = JSON.parse(fs.readFileSync("animes.json"))
    const novaListaDeAnimes = [...animes, animeNovo]

    fs.writeFileSync("animes.json", JSON.stringify(novaListaDeAnimes))
}

function modificaAnime(modificacoes, nome) {
    let animesAtuais = JSON.parse(fs.readFileSync("animes.json"))
    const indiceModificado = animesAtuais.findIndex(anime => anime.nome === nome)

    const conteudoMudado = { ...animesAtuais[indiceModificado], ...modificacoes }

    animesAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("animes.json", JSON.stringify(animesAtuais))
}

function deletaAnimePorNome(nome) {
    const animes = JSON.parse(fs.readFileSync("animes.json"))

    const animesFiltrados = animes.filter( anime => anime.nome !== nome )
    fs.writeFileSync("animes.json", JSON.stringify(animesFiltrados))
}

module.exports = {
    getTodosAnimes,
    getAnimePorNome,
    insereAnime,
    modificaAnime,
    deletaAnimePorNome
}