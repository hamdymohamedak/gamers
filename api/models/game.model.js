const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  name: {
    type: String,
    required: [true, "You must enter game name"],
  },
  size: {
    type: String,
    required: [true, "You must enter game size"],
  },
  download_link: {
    type: String,
    required: [true, "You must enter download link"],
  },
  image_url: {
    type: String,
    required: [true, "You must enter image url"],
  },
  operating_system: {
    type: String,
    required: [true, "You must enter operating system"],
  },
  processor: {
    type: String,
    required: [true, "You must enter processor"],
  },
  memory: {
    type: String,
    required: [true, "You must enter memory"],
  },
  graphics: {
    type: String,
    required: [true, "You must enter graphics"],
  },
  direct_x: {
    type: String,
    required: [true, "You must enter direct x"],
  },
  hard_drive: {
    type: String,
    required: [true, "You must enter hard_drive"],
  },
  platform: {
    type: String,
    required: [true, "You must enter platform"],
  },
});

module.exports = model("Game", gameSchema);
