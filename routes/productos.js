const express = require('express');
const productosController= require('../controllers/productosController.js')
const router = express.Router();
const path = require('path');


router.get('/productCart', productosController.carDetalle);

router.get('/productDetail', productosController.detalle);


module.exports = router;