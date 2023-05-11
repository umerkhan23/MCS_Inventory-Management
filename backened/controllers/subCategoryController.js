const mongoose = require('mongoose') ;

const Sub_Category=require('../models/subcategory');
const addSubCategory = async (req,res)=>{

    try{

        const subcategory=await Sub_Category.create(req.body);
        res.status(200).json({subcategory});



    }
    catch(err){
        console.log(err);
    }


}

const getSubCategory = async (req, res)=>{
    const docs_sub=await Sub_Category.find({});
    res.status(200).json({docs_sub});
}
// getSubCategory();
module.exports= {addSubCategory,getSubCategory};