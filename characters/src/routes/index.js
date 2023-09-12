const { Router } = require("express");
const controller = require('../constrollers')

const router = Router();

router.get("/", controller.getCharacters);

module.exports = router;
