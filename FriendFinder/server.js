var express = require("express");

var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

require("./routing/apiRoute.js")(app);
require("./routing/htmlRoute.js")(app);

//path.join(__dirname, 
//path.join(__dirname, 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
