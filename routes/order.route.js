const express = require("express");
const orderRoute = express.Router();
const {OrderModel} = require("../model/order.model");
const {CartModel} = require("../model/cart.model");
const jwt = require("jsonwebtoken");

orderRoute.get('/', async(req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.verify(token, "Triveous",)
    try{
        const products = await OrderModel.find({"userID":decoded.userID})
        res.status(200).send(products)
    }catch(err){
        res.status(400).send(err.message)
    }
})

orderRoute.get('/:id', async(req, res) => {
    const {id} = req.params
    try{
        const product = await OrderModel.findOne({_id:id})
        console.log(product)
        res.status(200).send(product)
    }catch(err){
        res.status(400).send(err.message)
    }
})

orderRoute.post("/add/:id", async(req, res) => {
    const {id} = req.params;
    // let a = req.body;
    try{
        const cartProduct = await CartModel.findOne({_id:id})
        if(cartProduct){
            let obj = {title:cartProduct.title, price:cartProduct.price, category:cartProduct.category, description:cartProduct.description, quantity:cartProduct.quantity, userID:cartProduct.userID}
            const order = new OrderModel(obj)
            await order.save();
            res.status(200).send({"msg":"order has been placed"});
        }else{
            res.status(400).send({"msg":"Product id not found"})    
        }
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports={
    orderRoute
}