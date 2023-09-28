const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" }, // referencia a el id del planeta.
  films: [{ type: String, ref: "Films" }], // array de referencias a peliculas.
});

module.exports = characterSchema;