/* eslint-disable no-undef */

const { products } = require("../database/database");

const product = (req, res) => {
    return res.status(200).json({
        status: "success",
        products
    });
};

const addProduct = (req, res) => {
    const newProduct = {
        id: products.length > 0 ? products.at(-1).id + 10 : 1,
        name: String(req.body.name),
        description: String(req.body.description),
        price: Number(req.body.price)
    };

    products.push(newProduct);

    return res.status(201).json({
        status: "success",
        message: "Product successfully added",
        product: newProduct
    });
};

const editProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    const product = products.find(
        P => P.id === Number(id)
    );

    if (!product) {
        return res.status(404).json({
            status: "error",
            message: "Product not found!"
        });
    }

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.description = description ?? product.description;

    return res.status(200).json({
        status: "success",
        message: "Product successfully updated",
        product
    });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex(
        P => P.id === Number(id)
    );

    if (productIndex === -1) {
        return res.status(404).json({
            status: "error",
            message: "Product not found!"
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    return res.status(200).json({
        status: "success",
        message: "Product successfully removed",
        product: deletedProduct[0]
    });
};

module.exports = {
    product,
    addProduct,
    editProduct,
    deleteProduct
};