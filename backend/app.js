require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const authRoute = require("./routers/auth");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);

app.use("*", (req, res) => {
  res.status(404), json({ message: "route not found!" });
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  const port = process.env.PORT || "5000";
  app.listen(port, console.log("server started on port 5000"));
});
