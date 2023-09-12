const { Router } = require("express");
const controllers = require('../constrollers')

const router = Router();

router.get("/", controllers.getCharacters);

module.exports = router;
