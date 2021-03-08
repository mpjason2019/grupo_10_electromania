const express = require('express');
const productosController= require('../controllers/productosController.js')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
    } 
  })
  var upload = multer({ storage: storage }) 

router.get('/', productosController.index);   

router.get('/productCart', productosController.carDetalle);

router.get('/productDetail', productosController.detalle);

router.get('/create', productosController.create);



module.exports = router;