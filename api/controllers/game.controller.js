const gameModel = require("../models/Game.model");
class GameController {
  static async add(req, res) {
    let game = await gameModel.create({
      name: req.body.name,
      size: req.body.size,
      download_link: req.body.download_link,
      image_url: req.body.image_url,
      operating_system: req.body.operating_system,
      processor: req.body.processor,
      memory: req.body.memory,
      graphics: req.body.graphics,
      direct_x: req.body.direct_x,
      hard_drive: req.body.hard_drive,
      platform: req.body.platform,
    });
    try {
      await game
        .save()
        .then(() =>
          res.json({ success: true, message: "saved successfully!" })
        );
    } catch (error) {
      return res.json({
        success: false,
        message: "something went wrong whlie saving the game !",
      });
    }
  }
  static async getAll(req, res) {
    const games = await gameModel.find();
    try {
      res.json({
        success: true,
        games,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: error.message,
        error: error,
      });
    }
  }
  static async getById(req, res) {
    const game = await gameModel.findById(req.params.id);
    if (game == null) {
      return res.json({
        success: false,
        message: `Cannot found game with ${id} id`,
      });
    }
    res.json({
      success: true,
      game,
    });
  }
}

module.exports = GameController;
