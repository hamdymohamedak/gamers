require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dbConnect = require("./db/connect");
const gameRouter = require("./routes/games");

app.use(express.json());
app.use("/api/games", gameRouter);

dbConnect();
app.listen(port, () =>
  console.log(
    `Listening On Port ${port} \nurl = localhost:${port} \napi_url = localhost:${port}/api`
  )
);
