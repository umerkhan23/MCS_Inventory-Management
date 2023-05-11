const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;


const Sub_Category=new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    category_type:{
        type: String,
        required: true,
    }
})

module.exports= mongoose.model('Sub_Category', Sub_Category)