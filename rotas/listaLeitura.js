const { Router } = require("express")
const { getLivros, postLivro } = require("../controladores/listaLeitura")
const router = Router()

router.get('/', getLivros)

router.post('/', postLivro)

module.exports = router