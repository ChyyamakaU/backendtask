/* eslint-disable no-undef */
const express = require("express");
const { registerNew } = require("../controllers/userController");

const router = express.Router();

router.post("/", registerNew);

module.exports = router;

