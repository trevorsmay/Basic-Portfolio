import axios from "axios";

// import assets from "../assets";
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("");
  },
  getRandomImage: function(assets) {
    return axios.get("", assets);
  },
  getDogsOfBreed: function(breed) {
    return axios.get("" + breed + "");
  },
  getBaseBreedsList: function() {
    return axios.get("");
  }
};
