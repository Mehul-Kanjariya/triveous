const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token, "Triveous",)
        // jwt.verify(token, "Triveous", (err, decode) => {

        // })
        if(decoded){
            next()
        }else{
            res.status(400).send({"msg":"Please Login first"})
        }
    }else{
        res.status(400).send({"msg":"Please Login first"});
    }
}

module.exports={
    auth
}