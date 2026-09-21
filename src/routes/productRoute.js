/* eslint-disable no-undef */
const express = require("express");
const productRoute = express.Router();



const authenticate = require("../middleware/authentication");
const { addProduct, product, editProduct, deleteProduct } = require("../controllers/productsController");
const { adminAuthorise } = require("../middleware/authorise");


productRoute.get('/view', authenticate, product)
productRoute.post('/add', authenticate, adminAuthorise, addProduct, product)
productRoute.put('/edit/:id', authenticate, adminAuthorise, editProduct, product)
productRoute.delete('/remove/:id', authenticate, adminAuthorise, deleteProduct, product)



module.exports = { productRoute };