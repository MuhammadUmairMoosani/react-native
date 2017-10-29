const http = require('http');
http.createServer(function(request,response) {
    response.end('Hello world')
}).listen(1000, function () {
    console.log("server is running")
})