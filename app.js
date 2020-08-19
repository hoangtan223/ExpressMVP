const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const auth = require("./api/routes/auth");
const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use("/auth", auth);

module.exports = app;
