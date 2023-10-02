const express = require("express");
const productRoute = express.Router();
const {ProductModel} = require("../model/product.model");
const {auth} = require("../middleware/auth.middleware");

productRoute.get('/', async(req, res) => {
    try{
        const products = await ProductModel.find()
        res.status(200).send(products)
    }catch(err){
        res.status(400).send(err.message)
    }
})

productRoute.use(auth)

productRoute.get('/:id', async(req, res) => {
    const {id} = req.params;
    try{
        const product = await ProductModel.find({_id:id})
        res.status(200).send(product)
    }catch(err){
        res.status(400).send(err.message)
    }
})

productRoute.post('/add',async(req, res) => {
    try{
        const product = new ProductModel(req.body);
        await product.save();
        res.status(200).send({"msg":"A new product has been added"});
    }catch(err){
        res.status(400).send({"msg":err.message});
    }
})

productRoute.patch('/update/:productID', async(req, res) => {
    const payload = req.body
    const productID = req.params.productID
    try{
        await ProductModel.findByIdAndUpdate({_id:productID},payload)
        res.status(200).send({"msg":`Product with ID ${productID} has been updated`})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

productRoute.delete('/delete/:productID', async(req, res) => {
    const productID = req.params.productID
    try{
        await ProductModel.findByIdAndDelete({_id:productID})
        res.status(200).send({"msg":`Product has been deleted`})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

module.exports={
    productRoute
}