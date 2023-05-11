const mongoose = require('mongoose') ;
const SubCategoryDetails=require('../models/subCategoryDetails');


const addsubCategorydetails = async (req , res)=>{
    try{

        const subCategoryDetails=await SubCategoryDetails.create(req.body);
        res.status(200).json({subCategoryDetails});


    }
    catch(err){
        console.log(err);
    }


}

const getsubCategoryDetails = async (req, res)=>{
    const subCategoryDetails = await SubCategoryDetails.find({});
    res.status(200).json({subCategoryDetails});
}

module.exports= {addsubCategorydetails,getsubCategoryDetails};