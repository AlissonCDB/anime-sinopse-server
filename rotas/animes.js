const { Router} = require("express");
const { getAnimes, getAnime, postAnime, patchAnime, deleteAnime } = require("../controladores/animes");
const router = Router()

router.get('/', getAnimes)

router.get('/:nome', getAnime)

router.post('/', postAnime)

router.patch('/:nome', patchAnime)

router.delete('/:nome', deleteAnime)

module.exports = router