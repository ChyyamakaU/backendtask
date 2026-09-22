
/* eslint-disable no-undef */

const express = require("express");

const productRoute = express.Router();

const authenticate = require("../middleware/authenticate");
const authorization = require("../middleware/authorise");

const {
    addProduct,
    product,
    editProduct,
    deleteProduct
} = require("../controllers/productController");


productRoute.get(
    "/view",
    authenticate,
    product
);

productRoute.post(
    "/add",
    authenticate,
    authorization,
    addProduct
);

productRoute.put(
    "/edit/:id",
    authenticate,
    authorization,
    editProduct
);

productRoute.delete(
    "/remove/:id",
    authenticate,
    authorization,
    deleteProduct
);


module.exports = { productRoute };

