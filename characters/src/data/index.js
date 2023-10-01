//const characters = require('./characters.json');
const axios = require("axios");

module.exports = {
  list: async () => {
    const characters = await axios.get("http://localhost:8004/Character");
    return characters.data;
  },
  get: async (id) => {
    const character = await axios.get(`http://localhost:8004/Character/${id}`);
    return character.data;
  },
  create: async (character) => {
    const newCharacter = await axios.post(
      "http://localhost:8004/Character",
      character
    );
    return newCharacter.data;
  },
};
