var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write("Joshua Covington did this!!");
    res.end();
});
server.listen(3000);
console.log("Listening on http://127.0.0.1:3000/");