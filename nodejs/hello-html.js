// OS REQUIRE BÁSICOS

var http  = require('http'),
	fs    = require('fs'),
	index = fs.readFileSync('index.html');

// OU VARIÁVEIS PODEM SER ESPECIFICADAS PARA DENOTAR AS FUNÇÕES

var server = http.createServer(function(request, response){

	response.writeHead(200, {"Content-Type": "text/html"});

	// É SEMPRE PRECISO FECHAR A CONEXÃO QUANDO ABERTA, SENÃO DARÁ
	// TIMEOUT
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