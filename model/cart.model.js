const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    title:String, 
    price:Number, 
    category:String,
    description:String,
    availability:Boolean,
    quantity:Number,
    userID:String
},{
    versionKey:false
});

const CartModel = mongoose.model("cart",cartSchema);

module.exports={
    CartModel
}