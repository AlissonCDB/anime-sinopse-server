const { Router } = require("express")
const { getLivros } = require("../controladores/listaLeitura")
const router = Router()

router.get('/', getLivros)

module.exports = router