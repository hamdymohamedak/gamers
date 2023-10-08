const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.DB_URL, { dbName: "Games" })
    .then(() => console.log("Connected To DB"))
    .catch((err) => console.error("error while connect to db:", err));
};
