/* eslint-disable no-undef */

const express = require("express");

const app = express ();

// const greetroute = require("./routes/greetroute")
const userRoute = require("./routes/userRoute")

app.use (express.json())
// app.use("/greet", greetroute)
app.use("/register", userRoute)

module.exports = app;

