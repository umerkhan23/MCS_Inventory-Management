const express = require('express');
const multer=require('multer');

const {addProduct , getProduct, updateProduct ,} = require('../controllers/productController')

const router = express.Router();

// const upload=multer({storage: storage, limits: {
//         fileSize:1024*1024*5
//     },
//     fileFilter: fileFilter
// });
router.post('/', addProduct);

router.put('/:id', updateProduct);

router.get('/', getProduct);
module.exports = router;