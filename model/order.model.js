const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    title:String, 
    price:Number, 
    category:String,
    description:String,
    quantity:Number,
    userID:String
},{
    versionKey:false
});

const OrderModel = mongoose.model("order",orderSchema);

module.exports={
    OrderModel
}