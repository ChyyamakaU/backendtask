/* eslint-disable no-undef */

const express = require("express");

const productRoute = express.Router();

const authenticate = require("../middleware/authenticate");

const {
    addProduct,
    product,
    editProduct,
    deleteProduct
} = require("../controllers/productsController");

const {
    adminAuthorise
} = require("../middleware/authorise");


productRoute.get(
    "/view",
    authenticate,
    product
);

productRoute.post(
    "/add",
    authenticate,
    adminAuthorise,
    addProduct
);

productRoute.put(
    "/edit/:id",
    authenticate,
    adminAuthorise,
    editProduct
);

productRoute.delete(
    "/remove/:id",
    authenticate,
    adminAuthorise,
    deleteProduct
);

module.exports = { productRoute };