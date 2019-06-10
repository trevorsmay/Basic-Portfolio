function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = makeNoise;
}

var frog = new Animal(true, )

var dogs = {
    raining: true,
    noise: "Wolf!",
    makeNoise: function (){
        if (dogs.raining === true){
            console.log(this.noise);
        }
    }
};


var cats = {
    raining: true,
    noise: "Meow!",
    makeNoise: function() {
        if (cats.raining === true){
            console.log(this.noise);
        }
    }
};

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();
