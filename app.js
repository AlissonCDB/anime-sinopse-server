const express = require('express');
const cors = require('cors');
const rotaAnime = require('./rotas/animes');
const rotaLivro = require('./rotas/listaLeitura');

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }));

app.use('/animes', rotaAnime);
app.use('/listaLeitura', rotaLivro);

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
