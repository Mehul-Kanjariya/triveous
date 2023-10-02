const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://mehulkr:mehulkr@cluster0.2ucwgm5.mongodb.net/ecommerce?retryWrites=true&w=majority")

module.exports={
    connection
}