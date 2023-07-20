const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.use(express.static(path.join(__dirname, "../public")));

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

module.exports = app;
