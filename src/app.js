/* eslint-disable no-undef */

const express = require("express");

const app = express ();

// const greetroute = require("./routes/greetroute")
const userRoute = require("./routes/userRoute")
const adminRoute = require("./routes/adminRoute");

app.use (express.json())

// app.use("/", (req, res) => {
//     res.status(200).json({
//         "status" : "successful",
//         "message" : "Api is running"
//     })
// })
// app.use("/greet", greetroute)
app.use("/user", userRoute)
app.use("/admin", adminRoute)
module.exports = app;

