var socket = io();

socket.on('connect', function(){
    console.log('Conectado ao Servidor');
});
//Escutar
socket.on('disconnect', function(){
    console.log('Conexão Perdida com o Servidor');
});
//Enviar Informação ao Servidor
socket.emit('enviarMensagem',{
    usuario: 'Rodrigo',
    mensagem: 'Olá Mundo!'
}, function(resp){
    console.log('Resposta do Servidor: ', resp);
});
//Escutando a Informação do Servidor
socket.on('enviarMensagem',function(mensagem){
    console.log('Servidor: ', mensagem);
});