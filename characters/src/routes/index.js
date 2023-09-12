const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("Characters"));

router.use("/characters", require("./charactersRouter"));

module.exports = router;
