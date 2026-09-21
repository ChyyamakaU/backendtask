/* eslint-disable no-undef */
const admin = (req, res) =>{
    res.status(200).json({
        "status": "Success",
        "message": "Welcome admin",
        "name": req.body.name,
        "email": req.body.email,
        "token": req.token
    })
}


const user = (req, res) =>{

    res.status(200).json({
        "status": "Success",
        "message": "Welcome user",
         "name": req.body.name,
        "email": req.body.email,
        "token": req.token
    })
    
}

module.exports ={
    admin,
    user
}


