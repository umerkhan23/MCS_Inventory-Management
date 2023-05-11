const express = require('express');
const {addCategory, getCategory} = require("../controllers/categoryController");
const {addSubCategory, getSubCategory} = require("../controllers/subCategoryController");
const {addsubCategorydetails, getsubCategoryDetails} = require("../controllers/subCategoryDetailsController");

const router = express.Router();

router.post('/', addCategory);
router.get('/', getCategory);

router.post('/subcategory', addSubCategory);
router.get('/subcategory', getSubCategory);

router.post('/subcatdetails', addsubCategorydetails);
router.get('/subcatdetails', getsubCategoryDetails);


module.exports = router;