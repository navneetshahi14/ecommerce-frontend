const mongoose = require('mongoose')

let ProductInput = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    image1:{
        data:Image,
        type:String,
        required:true
    },
    image2:{
        data:Image,
        type:String,
        required:true
    },
    image3:{
        data:Image,
        type:String,
        required:true
    },
    image4:{
        data:Image,
        type:String,
        required:true
    }
})

let Product = mongoose.model('product',ProductInput)

module.exports = Product