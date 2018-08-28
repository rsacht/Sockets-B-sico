const{io} = require('../server');

//Para saber quando um usuário se conecta
io.on('connection', (client)=>{
    console.log('Usuário Conectado');

    //Enviando Mensagem de Boas Vindas do Servidor
    client.emit('enviarMensagem',{
        usuario: 'Administrador',
        mensagem: 'Bem-Vindo a esta aplicação!'
    });

    client.on('disconnect',() =>{
        console.log('Usuário Desconectado');
    });
    //Escutando o Cliente
    client.on('enviarMensagem',(mensagem, callback) =>{
        //console.log(mensagem);
        if(mensagem.usuario){
            callback({
                resp: 'Tudo saiu bem!'
            });
        }else{
            callback({
                resp: 'Tudo saiu mal!'
            });
        }
        
    });
});
//Recarregue o navegador e veja a mensagem no console
