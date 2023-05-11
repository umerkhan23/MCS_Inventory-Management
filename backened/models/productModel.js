const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;

const productSchema = new Schema({
    eqpt_id: {
        type: Number,
        required: true,
        unique: true
    },
    eqpt_category: {
        type: String,
        required: true,
    },
    eqpt_subcategory: {
        type: String,
        required: true,
    },
    serial_no: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    warranty: {
        type: String,
        required: true,
    },
    dop: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    fund:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    remarks:{
        type: String,
        required: true
    },
    techspecs:{
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Product', productSchema);