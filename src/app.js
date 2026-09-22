/* eslint-disable no-undef */

const express = require("express");

const app = express();

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const { productRoute } = require("./routes/productRoute");

app.use(express.json());

app.use("/user", userRoute);

app.use("/api", adminRoute);

app.use("/products", productRoute);

module.exports = app;