const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");
const {
  getController,
  getByIdController,
  postController,
} = require("../controllers");

const router = Router();

router.get("/:model", validateModel, getController);

router.get("/:model/:id", validateModel, getByIdController);

router.post("/:model", validateModel, postController);

module.exports = router;
