/* eslint-disable no-undef */
const express = require("express");

const app = express ();

const greetroute = require("./routes/greetroute")

app.use (express.json())
app.use("/greet", greetroute)

module.exports = app;