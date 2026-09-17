/* eslint-disable no-undef */
const express = require("express");
const router =express.Router();

const {morning, afternon, evening } = require("../controllers/greetings");




router.get("/morning", morning);
router.get("/afternoon", afternon);
router.get("/evening", evening);

module.exports = router;