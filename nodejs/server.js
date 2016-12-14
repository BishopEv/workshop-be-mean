'use strict';

// OS REQUIRE BÁSICOS

const http  = require('http'),
	  JSON = {
	  	version: 1.0,
	  	name: 'Be MEAN',
	  	created_at: Date.now()
	  };

// OU VARIÁVEIS PODEM SER ESPECIFICADAS PARA DENOTAR AS FUNÇÕES

http.createServer(function(request, response){

	// ESCREVENDO NO CABEÇALHO
	response.writeHead(200, {"Content-Type": "text/html"});

	// É SEMPRE PRECISO FECHAR A CONEXÃO QUANDO ABERTA, SENÃO DARÁ
	// TIMEOUT
	response.end();
}).listen(3000, function(){
	// IMPRIMINDO NO CMD
	console.log('Servidor rodando em localhost:3000');
});

// A FUNÇÃO ANÔNIMA É UMA CARACTERÍSTICA MUITO IMPORTANTE PARA O
// JAVASCRIPT, QUE RESPONDE PARA O CLIENTE QUE FEZ A REQUISIÇÃO
// SERÁ EXECUTADA E MORRE, NAQUELE MOMENTO, POIS NÃO TEM NENHUMA
// REFERÊNCIA PARA VARIÁVEL