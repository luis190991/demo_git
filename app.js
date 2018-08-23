//ES5 -> ES6

const http = require("http");

// Primera  implementación
function server(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write("Hola Mundo!!.");
  response.end();
}

http.createServer(server).listen(8080);


//Segunda implementación

http.createServer(function(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write("Hola Mundo!!.");
  response.end();
}).listen(8080);


//Tercera Implementación

http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write("Hola Mundo!!.");
  response.end();
}).listen(8080);
