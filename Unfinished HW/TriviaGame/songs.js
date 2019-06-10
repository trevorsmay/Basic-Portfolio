var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    port: 8809,

    password: "root",
    database: "top_songsDB"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
});

function runSearch () {
    inquirer
    .prompt({
        name:"action",
        type:"list",
        choices: [
            "Find songs by artist",
            "Find all artists who appear more than once",
            "Find data within a specific range",
            "Search for a specific song",
            "exit"
        ]
    })
.then(function(answer) {
    switch (answer.action) {
        case "Find songs by artist":
            artistSearch();
            break;

        case "Find all artists who appear more than once":
            multiSearch();
            break;

        case "Find data within a specific range":
            rangeSearch();
            break;

        case "exit":
            connection.end();
            break;
    }
});

}


function artistSearch() {
    inquirer
    .prompt({
        name: "artist",
        type: "input",
        message: ""
    })
.then(function (answer){
    var query = "SELECT position, song, year From top5000 WHERE ?";
    connection.query(query, { artist: answer.artist }, function(err, res){
        if (err) throw err;
        for (var i = 0; i < res.lengthl; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + "|| Year: " + res[i].year);
        }
        runSearch();
    });
});
}

function multiSearch() {
    var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count (*) > 1";
    connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].artist);
        }
        runSearch();
    });
}

function rangeSearch() {
    inquirer
    .prompt([
        {
            name: "start",
            type: "input",
            message: "Enter starting position: ",
            validate: function(value) {
                if (isNaN(value)=== false) {
                    return true;
                }
                    return false;
            }
        },
        {
            name: "end",
            type: "input",
            message: "Enter ending position: ",
        }

    ])
    
    
}
