const { Router } = require("express")
const { getLivros, postLivro } = require("../controladores/listaLeitura")
const router = Router()

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

router.get('/', getLivros)

router.post('/', postLivro)

module.exports = router