var http = require('http');

// PODE HAVER CONCATENAÇÕES DE FUNÇÕES.

/*

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Be MEAN");
	response.end();
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
})

*/

// OU VARIÁVEIS PODEM SER ESPECIFICADAS PARA DENOTAR AS FUNÇÕES

var server = http.createServer(function(request, response){

	// O CONTENT TYPE É IMPORTANTE PARA ESPECIFICAR QUE TIPO
	// DE RETORNO O RESPONSE DARÁ. NESTE CASO, É TEXT/PLAIN
	// PARA QUE O HTML DO WRITE FUNCIONEL, O PLAIN MUDA PRA
	// HTML

	response.writeHead(200, {"Content-Type": "text/html"});

	// QUANDO O SCRIPT É EXECUTADO, ELE RETORNA APENAS ESTE
	// TEXTO DO WRITE. PODEMOS RETORNAR HTML TAMBÉM.
	// response.write("Be MEAN");

	response.write("<h1>Be MEAN</h1>");
	response.end();
});

// A FUNÇÃO LISTEN É COM VOCÊ ESPECIFICANDO A PORTA
server.listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});

// A FUNÇÃO ANÔNIMA É UMA CARACTERÍSTICA MUITO IMPORTANTE PARA O
// JAVASCRIPT, QUE RESPONDE PARA O CLIENTE QUE FEZ A REQUISIÇÃO
// SERÁ EXECUTADA E MORRE, NAQUELE MOMENTO, POIS NÃO TEM NENHUMA
// REFERÊNCIA PARA VARIÁVEL