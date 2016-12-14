// PEGANDO A DATA ATUAL PELO SERVIDOR
var date = (new Date()).toJSON();

// CRIANDO AS VARIÁVEIS DE INICIALIZAÇÃO
const http = require('http')
	, SUCESS = {
		version: '1.0'
	  , name: 'Be MEAN'
	  , returned_at: date
	  }
	, ERROR = {
		message: "OCORREU UM ERRO!"
	  }
	;

// CRIANDO O SERVIDOR

http.createServer(function(req, res){

	// SE A URL FOR 
	if(req.url === '/api/v1') {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(SUCESS));
	// SENÃO
	} else {
		res.writeHead(404, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(ERROR));
	}
	// FECHANDO O SERVIDOR
	res.end();
	
}).listen(3000, function(){
	console.log('Servidor rodando em localhost:3000');
});