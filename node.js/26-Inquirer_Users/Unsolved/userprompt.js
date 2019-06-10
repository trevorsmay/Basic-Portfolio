// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

var inquirer = require("inquirer");

inquirer

    .prompt([

        {
            type: "input",
            message: "What is your mom's name?",
            name: "momsname"
        },
        {
            type: "password",
            message: "Set password",
            name: "password"
        },
        {
            type: "checkbox",
            message: "Is tomorrow Mother's Day?",
            choices: ["Yes", "No"],
            name: "checkbox"
        },
        {
            type: "list",
            message: "What should you get your mom for Mother's Day?",
            choices: ["Flowers", "Lawn Art", "Perfume"],
            name: "gifts"
        },
        {
            type: "confirm",
            message: "Are you sure: ",
            name: "confirm",
            default: true
        }
    ])
//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm
.then(function(inquirerResponse){
    if(inquirerResponse.confirm){
        console.log("\nHello " + inquirerResponse.momsname);
        console.log("Don't forget to buy " + inquirerResponse.gifts + " for your mom today.\n");
    }
});
// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
