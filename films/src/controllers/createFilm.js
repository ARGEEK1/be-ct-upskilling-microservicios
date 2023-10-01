const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const film = req.body;
  const newFilm = await Films.create(film);
  response(res, 201, newFilm);
};
