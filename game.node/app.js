var inquirer = require("inquirer");

function Player (name, position, offense, defense, goodGame, badGame) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.goodGame = goodGame;
    this.badGame = badGame;


    this.goodGame = function() {
        if (Math.floor(Math.random()*2) === 0){
            this.offense++;
            console.log(this.name + "'s offense has gone up! \n----------");
        }else {
            this.defense++;
            console.log(this.name + "'s defense has gone up! \n----------");
        }
    };
    this.badGame = function() {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s defense has gone down!\n----------");
    } else {
        this.defense--;
        console.log(this.name + "'s defense has gone down!\n---------");
    }
};
this.printStats = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
}
};



var count = 0; 

var playerArray = [];
var playerSub = [];
var playerStarter = [];

var createPlayer = function () {

    if (starters.length + subs.length < 5) {
        console.log("\nNew Player!\n");


        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            },{
                name: "position",
                message: "What position?"
            },{
                name: "offense",
                message: "How good between 1-10?", 
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                }
                return false;
            }
            
        }, {
                name: "defense",
                message: "How good between 1-10?",
                validate: function(value) {
                    if (isNaN(value) === false && parseInt(value) > 0 && parsInt(value) <= 10) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function(answers) {

            var newPlayer = new Player(answers.name, answers.position, parseInt(answer.offense), parsInt(answers.defense));

            if (starters.length < 3) {
                starters.push(player);
                team.push(player);
                console.log(player.name + " added to the starters");
            }
            else {
                subs.push(player);
                team.push(player);
                console.log(player.name + " added to the subs");
            }
            createPlayer();
        });
    }
    } else {
        for (var x = 0; x < playerArray.length; x++) {
            playerArray[x].printStats();
        }
    }
}; 

createPlayer();