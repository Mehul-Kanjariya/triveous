const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    category:String
},{
    versionKey:false
});

const CategoryModel = mongoose.model("category",categorySchema);

module.exports={
    CategoryModel
}