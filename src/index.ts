import * as http from "http";
import * as url from "url";

// server
var server = http.createServer((req, res) => {
    var urlString = req.url || "NO URL";
    var parsedUrl = url.parse(urlString, true);
    var path = parsedUrl.pathname || "NO PATH";
    var trimmedPath = path.replace(/^\/+|\/+$/g, "");
    var method = (req.method || "NO METHOD").toUpperCase();
    var parameters = parsedUrl.query;
    var headers = req.headers;

    res.write("Hello World!\n");
    res.end();

    console.log(`path: ${trimmedPath}, method: ${method}, parameters: ${JSON.stringify(parameters)}, headers:`, headers);
});

server.listen(3000, () => console.log("Server started on port 3000"));
