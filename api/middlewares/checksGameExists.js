const gameModel = require("../models/Game.model");

module.exports = async (req, res, next) => {
  const game = await gameModel.findOne({ name: req.body.name });
  if (game) {
    return res.json({
      success: false,
      message: "There is already game with this name",
    });
  }
  next();
};
