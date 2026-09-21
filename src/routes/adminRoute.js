/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const authentication = require("../middleware/authenticate");
const authorization = require("../middleware/authorise");

router.get(
  "/admin",
  authentication,
  authorization,
  adminController
);
module.exports = router;