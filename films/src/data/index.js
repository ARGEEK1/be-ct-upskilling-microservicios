//const films = require('./films.json');
const axios = require("axios");

module.exports = {
  list: async () => {
    const films = await axios.get("http://database:8004/Film");
    return films.data;
  },
  get: async (id) => {
    const film = await axios.get(`http://database:8004/Film/${id}`);
    return film.data;
  },
  create: async (film) => {
    const newFilm = await axios.post("http://database:8004/Film", film);
    return newFilm.data;
  },
};
