var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');
    var method = req.method.toUpperCase();
    var parameters = parsedUrl.query;
    var headers = req.headers;

    res.write('Hello World!\n');
    res.end();

    console.log(`path: ${trimmedPath}, method: ${method}, parameters: ${JSON.stringify(parameters)}, headers:`, headers);
});


server.listen(3000, () => console.log("Server started on port 3000"));