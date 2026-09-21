const { products } = require("../database")



const product = (req, res) => {
    const pdd = products



    return res.json({
        "products": pdd
    })
}