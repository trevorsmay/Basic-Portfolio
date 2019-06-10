// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
// how will you know what port? 
var PORT = 7000;
var PORTTWO = 7500; 
// Create a generic function to handle requests and responses
function handleRequestOne (request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

function handleRequestTwo (request, response) {

  response.end("The other one works! Path Hit: " + request.url);
}


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
// handleRequest outputs response to client action.
var server = http.createServer(handleRequestOne);

var server2 = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);

  
});

server2.listen(PORTTWO, function() {

  // Log (server-side) when our server has started

  console.log("Server listening on: http://localhost:" + PORTTWO);
});
