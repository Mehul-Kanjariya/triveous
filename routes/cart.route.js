const express = require("express");
const cartRoute = express.Router();
const {CartModel} = require("../model/cart.model");
const jwt = require("jsonwebtoken");

cartRoute.get('/', async(req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.verify(token, "Triveous",)
    try{
        const products = await CartModel.find({"userID":decoded.userID})
        res.status(200).send(products)
    }catch(err){
        res.status(400).send(err.message)
    }
})

cartRoute.post('/add',async(req, res) => {
    try{
        const product = new CartModel(req.body);
        await product.save();
        res.status(200).send({"msg":"A new product has been added to cart"});
    }catch(err){
        res.status(400).send({"msg":err.message});
    }
})

cartRoute.patch('/update/:productID', async(req, res) => {
    const payload = req.body
    const productID = req.params.productID
    try{
        await CartModel.findByIdAndUpdate({_id:productID},payload)
        res.status(200).send({"msg":`Product with ID ${productID} has been updated`})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

cartRoute.delete('/delete/:productID', async(req, res) => {
    const productID = req.params.productID
    try{
        await CartModel.findByIdAndDelete({_id:productID})
        res.status(200).send({"msg":`Product has been deleted`})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports={
    cartRoute
}