const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
// const addCategory=require('./controllers/categoryController')
// const addSubCategory=require('./controllers/subCategoryController')
// const Product=require('./models/productModel');
// const addITitem=require('./controllers/itDetailscontroller');

require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'))

app.use('/api/product',productRoutes);
app.use('/api/category',categoryRoutes);



async function run(){
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log('Connected to DB & Server is running on port ', process.env.PORT);

            });
        })
        .catch((error) => {
            console.log(error);
        })
}

run();