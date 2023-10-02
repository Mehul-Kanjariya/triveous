const jwt = require("jsonwebtoken");

const relation = (req,res,next)=>{
    const token = req.headers.authorization
    const decoded = jwt.verify(token, "Triveous",)
    req.body.userID = decoded.userID
    next()
}

module.exports={
    relation
}