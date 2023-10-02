const express = require("express");
const categoryRoute = express.Router();
const {CategoryModel} = require("../model/category.model");

categoryRoute.get('/', async(req, res) => {
    try{
        const category = await CategoryModel.find();
        res.status(200).send(category)
    }catch(err){
        res.status(400).send(err.message)
    }
})

categoryRoute.post('/add', async(req, res) => {
    try{
        const category = new CategoryModel(req.body);
        await category.save();
        res.status(200).send({"msg":"A new category has been added"})
    }catch(err){
        res.status(400).send(err.message)
    }
})

categoryRoute.post('/delete/:id', async(req, res) => {
    let {id} = req.params
    try{
        await CategoryModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Category has been deleted"})
    }catch(err){
        res.status(400).send(err.message)
    }
})

module.exports={
    categoryRoute
}