var http = require("http");
var fs = require("fs");

var PORT = 8081;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("Server is listening on PORT: " + PORT);

});

function handleRequest (req, res) {
  var path = req.url;

  switch (path) {

        case"/":
            return displayIndex(path, req, res);

        case "/foods":
            return displayFood(path, req, res);
        
        case "/frames":
            return displayFrame(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/framworks":
            return displayFrames(path, req, res);
  
    }
}

