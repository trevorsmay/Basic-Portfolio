//node variables for package installation
var mysql = require("mysql");
var inquirer = require("inquirer");

//create a server and connection to MySQL DB.
var connection = mysql.createConnection({
    host: "localhost",

    //my port
    port: 8889,

    //username
    user: "root",

    //password
    password: "root",
    database: "bamazonDB"
});

//for errors
connection.connect(function(err) {
    if(err) throw err;
    console.log("connect as id " + connection.threadId + "\n");
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            message: "What is the ID of your purchase?",
            message: "How many units would you like to buy?"
        })
}