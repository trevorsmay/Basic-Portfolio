var bands= require("./bands.js");

console.log(bands);

for (var key in bands.ourBands) {
    console.log("A " + key + "band = " + bands.ourBands[key] + "!"); 
}