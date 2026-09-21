const { products } = require("../database")



const product = (req, res) => {
    const pdd = products



    return res.json({
        "products": pdd
    })
}

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
