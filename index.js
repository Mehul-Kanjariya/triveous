const express = require("express");
const {connection} = require("./db.js");
const {userRouter} = require("./routes/user.routes");
const {productRoute} = require("./routes/ecommerce.routes");
const {auth} = require("./middleware/auth.middleware");
const {cartRoute} = require("./routes/cart.route")
const {relation} = require("./middleware/relation.middleware.js")
const {orderRoute} = require("./routes/order.route")
const {categoryRoute} = require("./routes/category.route")
const cors = require("cors"); 

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users",userRouter);
app.use("/products",productRoute);
app.use("/category",categoryRoute);
app.use(auth)
app.use(relation)
app.use("/cart",cartRoute)
app.use("/order",orderRoute)

app.listen(4500,async()=>{
    try{
        await connection;
        console.log("Connected to the DB");
    }catch(err){
        console.log(err);
        console.log("Server is running at port 4300")
    }
    console.log("Server is running at port 4300")
})