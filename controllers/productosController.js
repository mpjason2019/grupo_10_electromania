const path = require('path');

const productosController ={

    detalle:  (req, res) =>{
        res.render('productDetail');
    },
    carDetalle:  (req, res) =>{
        res.render('productCart');
    }
}


module.exports=productosController;
