const router = require("express").Router();
const gameController = require("../controllers/game.controller");
const checkPlatform = require("../middlewares/checkPlatform");
const checksGameExists = require("../middlewares/checksGameExists");

router.get("/", (req, res) => gameController.getAll(req, res));
router.get("/:id", (req, res) => gameController.getById(req, res));
router.post("/add", [checksGameExists, checkPlatform], (req, res) =>
  gameController.add(req, res)
);

module.exports = router;
