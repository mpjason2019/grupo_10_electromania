const path = require('path');
const { create } = require('../../../Clases/22_crud_1/crud/src/controllers/productsController');

const productosController ={

    detalle:  (req, res) =>{
        res.render('productDetail');
    },
    carDetalle:  (req, res) =>{
        res.render('productCart');
    },

    create:  (req, res) =>{
        res.render('product-create');
    }
}


module.exports=productosController;
