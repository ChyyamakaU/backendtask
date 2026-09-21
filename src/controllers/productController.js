/* eslint-disable no-undef */
const { products } = require("../database")



const product = (req, res) => {
    const pdd = products



    return res.json({
        "products": pdd
    })
}

// eslint-disable-next-line no-unused-vars
const addProduct = (req, res) => {

   

    const newProduct = {
        id: products.at(-1).id + 10,
        name: String(req.body.name),
        description: String(req.body.description),
        price: Number(req.body.price)
    }

    products.push(newProduct)
    // console.log(newProduct)


}

const editProduct = (req, res) => {

    const { id } = req.params;
    const { name, price, description } = req.body;

    const product = products.find(P => P.id === Number(id));

    if (!product) {
        return res.status(404).json({
            "message": "Product not found!"
        })
    }

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.description = description ?? product.description;

    res.status(200).json({
        "status": "sucess",
        "message": "Product sucessfully updated"
    })
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(P => P.id === Number(id));

    if (productIndex === -1) {
        return res.status(404).json({
            "message": "Product not found!"
        })
    }

    products.splice(productIndex, 1)

    res.status(200).json({
        "message": "Product sucessfully removed from cart"
    })
}

module.exports = {
    product,
    addProduct,
    editProduct,
    deleteProduct
}