const store = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const body = req.body;
  const response = await store[model].create(body);
  res.status(200).json(response);
};
