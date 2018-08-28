const express = require('express');

const path = require('path');

//Inicializando o Express
const app = express();

//Variavel para tornar publica a pasta public
const publicPath = path.resolve(__dirname, '../public');

//Indica a porta 3000 ou a porta que o Heroku informar
const port = process.env.PORT || 3000;

//Middleware para habilitar a pasta public
app.use(express.static(publicPath));


//Montamos a aplicação escutando a porta 3000 ou a porta que o Heroku informar
app.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor funcionando na porta ${ port }`);

});