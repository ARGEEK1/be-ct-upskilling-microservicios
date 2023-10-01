const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const character = req.body;
  const newCharacter = await Characters.create(character);
  response(res, 201, newCharacter);
};
