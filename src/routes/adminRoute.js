/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.get(
  "/admin",
  authentication,
  authorization,
  adminController
);

module.exports = router;