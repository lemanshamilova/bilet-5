const mongoose = require('mongoose');

const schema=mongoose.Schema(
    {
        image:String,
        title:String,
        price:Number,


    },
    {
        collection:"Products",
        timestamps:true
    }
)

const Products = mongoose.model('Products', schema);
module.exports=Products
