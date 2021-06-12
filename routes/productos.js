const express = require('express');
const productosController= require('../controllers/productosController.js')
const router = express.Router();
 const path = require('path');
const multer = require('multer');
const validacionCreacionProducto = require('../middlewares/validacionCreacionProducto');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
 const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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

router.get('/productDetail/:id', productosController.detalle);

router.get('/create', productosController.create);
router.post('/create', upload.single('image'),validacionCreacionProducto, productosController.store); 

router.get('/:id/edit', productosController.edit);
router.put('/:id', upload.single('image'), productosController.update);

router.delete('/:id', productosController.destroy); 

module.exports = router;