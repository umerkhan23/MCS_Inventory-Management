const mongoose = require('mongoose') ;
const Product = require('../models/productModel');
const multer = require("multer");

// const storage=multer.diskStorage({
//         destination: function (req,file,cb){
//             cb(null,'./uploads/')
//         },
//         filename: function(req,file,cb){
//             cb(null,new Date()+file.originalname)
//         }
//     }
// )


// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
//         cb(null,true)
//     }
//     else{
//         cb(new Error('error'),false)
//     }
// }
const addProduct = async (req, res) => {
    // const dat=new Date();
    // console.log(req.file);
    console.log("yesssssssssssss");

    const {eqpt_id, eqpt_category, eqpt_subcategory, serial_no, quantity, warranty, dop, vendor, fund, amount , remarks,techspecs , picture} = req.body;

    // const picture="dummy";
    console.log("niche");
    try {
        console.log("OK")

        console.log("new", eqpt_id,eqpt_category,eqpt_subcategory , serial_no, quantity, warranty, dop, vendor, fund, amount, remarks,techspecs,picture )
        const product = await Product.create({eqpt_id, eqpt_category,eqpt_subcategory, serial_no, quantity, warranty, dop, vendor, fund, amount, remarks,techspecs,picture});
        console.log("WOW", eqpt_id,eqpt_category, serial_no, quantity, warranty, dop, vendor, fund, amount, remarks )


        res.status(200).json({product});
    } catch (error) {

        console.log(error);
    }
};

const updateProduct = async (req, res) => {
    const {id} = req.params
    console.log("inter u")
    console.log("cc ",id)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "NO such Data"})
    }
    const product = await Product.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if(!product){
        return res.status(400).json({error: "No such Product"})
    }
    res.status(200).json(product);
}


const getProduct = async (req, res)=>{

    const products = await Product.find({});

    res.status(200).json({products});
}

module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    // storage,
    // fileFilter
}