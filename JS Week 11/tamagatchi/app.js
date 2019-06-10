function DigitalPal() {
    this.hungry = false; 
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
}

this.feed = function () {
    if (this.hungry === true) {
        console.log("That was yummy!");
        return false && this.sleepy === false; 
    } else  {
        this.hungry === false;
        console.log("No bitch, I'm full");
    }
}

this.sleep = function () {
    if(this.sleepy === true) {
        console.log("ZZZZZzzzzzz");
        return false && this.bored === true;
    } else {
        this.sleepy === false;
        console.log("Fuck no, I'm not tired");
    }
}

this.play = function () {
    if(this.bored === true) {
        console.log("Yay, let's play");
        return false && this.hungry === true;
    } else  {
        this.bored === false;
        console.log("Leave me alone, we'll talk later");
    }

    }

this.increaseAge = function () {
    sleep();
    this.age ++;
    console.log("Happy birthday to me! I am " + this.age + "old.");
}


var dog = new DigitalPal();

dog.outside=false;

this.bark = function () {
    console.log("Woof wooof!");
}

this.goOutside = function () {
    if (outside === false) {
        console.log("Yay, I love the outdoors");
        this.outside===true;
        this.bark();
    } else { 
        console.log("We're already outside");
    }
}

this.goInside = function() {
    if (this.outside === true) {
        console.log("Do we have to? Fine...");
        this.outside === false;
    } else {
        console.log("I'm already inside...");
    }
};

dog.bark();
dog.goOutside()= true;
dog.goInside()= true;

