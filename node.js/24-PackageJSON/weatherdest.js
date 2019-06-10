// This application uses two different NPM packages to provide the complete address and weather information about any location.
// Ex: "node weatherdest Paris, France" or "node weatherdest Tokyo, Japan"

// Mainly it combines the code from the last two activities with a bit more data handling. (Study it on your own time if interested).

// =========================================================================================================================================

// Include both the weather and node-geocoder NPM packages
var NodeGeocoder = require("node-geocoder");
var weather = require("weather-js");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "xJAyRPL6RsQ1vZ9UmAG8AGdAJD1leNJN"
};

var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address

// grab all user input from index 2, join all info with a space for formatting.
var address = process.argv.slice(2).join(" ");

// Then use the Google Geocoder to geocode the address
//data is the response in an object form. 

// why at index 0?
geocoder.geocode(address, function(err, data) {
  console.log(JSON.stringify(data[0], null, 2));

  var address = data[0];

  // if the user enters any of the following info, the search will return.
  var search = "";
//search by city
  if (address.city) {
    search += address.city;
  }
//search by stateCode
  if (address.stateCode) {
    search += ", " + address.stateCode;
  }
// search by zipcode
  if (address.zipcode) {
    search += " " + address.zipcode;
  }
//search by countryCode
  if (address.countryCode) {
    search += " " + address.countryCode;
  }

  // Run the weather package to search by either zip or city.
  weather.find({ search: search, degreeType: "F" }, function(err, result) {
    // If there is insufficient data, notify the user.
    if (err) {
      console.log("\r\n\r\n\r\n");

      console.log("Sorry we don't have enough data on that location! Try somewhere else.");

      console.log("\r\n\r\n\r\n");

      return;
    }

    // Then print the Weather information and complete Address
    console.log("\r\n\r\n\r\n");

    console.log("Weather Forecast for: " + search);

    console.log("Current Temperature: " + result[0].current.temperature + "° F");

    console.log("Sky: " + result[0].current.skytext);

    console.log(
      "Tomorrow's Forecast: Low of " +
        result[0].forecast[1].low +
        "° F | High of " +
        result[0].forecast[1].high +
        "° F"
    );

    console.log("\r\n\r\n\r\n");
  });
});

// Example Input:
// node weatherdest.js Salt Lake City, Utah

// RESULTING OUTPUT:
// Weather Forecast for: Salt Lake City, UT US
// Current Temperature: 70° F
// Sky: Sunny
// Tomorrow's Forecast: Low of 68° F | High of 89° F
