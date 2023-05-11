const mongoose = require('mongoose') ;
const Category=require('../models/category');
const Sub_Category=require('../models/subcategory');
const IT_Details=require('../models/subCategoryDetails');

const addCategory = async (req,res)=>{

    try{

        const category=await Category.create(req.body);
        res.status(200).json({category});


    }
    catch(err){
        console.log(err);
    }


}

const getCategory = async (req, res)=>{
    const docs=await Category.find({});
    res.status(200).json({docs});
}



module.exports= {addCategory,getCategory};