function Character(name, profession, gender, age, strength, hitpoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
}

this.printStats = function() {
    console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strenth + "\nHitpoints: " + this.hitpoints);
    console.log("\n-------------\n");
};

var myCharacter = new Character("Frank", "Collector", "Male", 35, 100, 25);

var newCharacter = new Character("Sally", "Home Maker", "Female", 75, 80, 50);

myCharacter.printStats();
newCharacter.printStats();

myCharacter.attack(newCharacter);
newCharacter.printStats();
newCharacter.isAlive();


this.isAlive = function () {
    if (this.hitpoints > 0) {
        console.log(this.name + " is still alive!");
        return true;
    } else {
        console.log("You dead." + this.name);
        return false;
    }
}

this.attack = function (character2) {
   character2.hitpoints -= this.strength;
};

this.levelUp = function () {
this.age += 1;
this.strength +=5; 
this.hitpints += 25;
};


