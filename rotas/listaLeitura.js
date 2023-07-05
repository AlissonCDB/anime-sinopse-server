const { Router } = require("express")
const { getLivros, postLivro } = require("../controladores/listaLeitura")
const router = Router()

router.get('/', getLivros)

router.post('/listaLeitura.json', postLivro)

module.exports = router