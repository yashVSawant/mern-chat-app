const express = require("express");

const app = express();

app.get("/api/auth", (req, res) => {
  res.status(201).json({ success: true });
});

app.listen("5000", console.log("server started on port 5000"));
