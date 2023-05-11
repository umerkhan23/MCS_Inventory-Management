const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;

const subCategoryDetails=new Schema({
    details:{
        type: String,
        required: true,
        unique: true
    },
    subCategoryType:{
        type: String,
        required: true,
    }

})

module.exports= mongoose.model('subCategoryDetails', subCategoryDetails)