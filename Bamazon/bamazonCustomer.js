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
    database: "bamazon_DB"
});

//for errors
connection.connect(function(err) {
    if(err) throw err;
    console.log("connect as id " + connection.threadId);
    
});


//prompt the questions 
function purchasePrompt() {
    inquirer
        .prompt([
            {
                name: "ID",
                type: "input",
                message:"Please enter Item ID you like to purchase.",
                filter:Number
            },

            {
                name: "Quantity",
                type: "input",
                message:"How many items would you like to purchase?",
                filter:Number
            },
        ]).then(function(answers){
            var quantityNeeded = answers.Quantity;
            var IDrequested = answers.ID;
            purchaseOrder(IDrequested, quantityNeeded);
        });
       };

       function purchaseOrder(ID, amtNeeded){
        connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
            if(err){console.log(err)};
            if(amtNeeded <= res[0].stock_quantity){
                var totalCost = res[0].price * amtNeeded;
                console.log("Good news your order is in stock!");
                console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");
    
                connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + "WHERE item_id = " + ID);
            } else{
                console.log("Insufficient quantity! " + res[0].product_name + " to complete your order.");
            };
            
        });
        
    };

    purchasePrompt();
