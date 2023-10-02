const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title:String, 
    price:Number, 
    category:String,
    description:String,
    availability:Boolean
},{
    versionKey:false
});

const ProductModel = mongoose.model("productlist",productSchema);

module.exports={
    ProductModel
}

/*
{
  "title":"Samsung galaxy M24",
  "price":13000,
  "category":"Smartphone",
  "description":"The Samsung Galaxy M24 arrives with an AMOLED multi-touch capacitive screen that offers a picture resolution of 720x1600 pixels. The screen has an aspect ratio of 20:9 that offer a better viewing experience and produces a pixel density of 274 pixels per inch (PPI). The device comes with a side-mounted fingerprint sensor and facial recognizer for unlocking the device with enhanced security.",
  "availability":false
}
*/ 