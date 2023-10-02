//const planets = require('./planets.json');
const axios = require("axios");

module.exports = {
  list: async () => {
    const planets = await axios.get("http://database:8004/Planet");
    return planets.data;
  },
  get: async (id) => {
    const planet = await axios.get(`http://database:8004/Planet/${id}`);
    return planet.data;
  },
  create: async (planet) => {
    const newPlanet = await axios.post("http://database:8004/Planet", planet);
    return newPlanet.data;
  },
};
