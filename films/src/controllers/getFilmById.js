const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = await Films.get(id);
  response(res, 201, film);
};
