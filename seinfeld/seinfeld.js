//need to do an NPM init

var mysql = require("mysql");
var express = require("express"); 

var app = express();

var PORT = process.env.PORT || 8080

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "seinfeld_db"
});

connection.connect(function(err){
    if(err) throw err;

    return;
})

app.get("/cast", function(req, res){
    connection.query
});

app.get("/coolness-chart", function(req, res){

});

app.get("/attitude-chart/:att", function(req, res){

});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});

