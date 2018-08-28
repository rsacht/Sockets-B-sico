const express = require('express');

//Importando a biblioteca socket.io
const socketIO = require('socket.io');

//Socket.io não trabalha com o servidor do express, 
//senão com o servidor nativo do Node.js
//Importando http para levantarmos um servidor para socket.io
const http = require('http');

const path = require('path');

//Inicializando o Express
const app = express();

//Criando o servidor com as configurações do express
let server = http.createServer(app);

//Variavel para tornar publica a pasta public
const publicPath = path.resolve(__dirname, '../public');

//Indica a porta 3000 ou a porta que o Heroku informar
const port = process.env.PORT || 3000;

//Middleware para habilitar a pasta public
app.use(express.static(publicPath));

//Inicializando o socket.io
// IO = esta é a comunicaão do backend
let io = socketIO(server);

//Para saber quando um usuário se conecta
io.on('connection', (client)=>{
    console.log('Usuário Conectado');
});
//Recarregue o navegador e veja a mensagem no console

//Montamos a aplicação escutando a porta 3000 ou a porta que o Heroku informar
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor funcionando na porta ${ port }`);

});