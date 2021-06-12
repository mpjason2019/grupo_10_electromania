// const { SSL_OP_NO_TLSv1_1 } = require('constants');
 const path = require('path');
// const fs = require('fs');
// const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
// const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const sequelize = db.sequelize;
const {
	validationResult
} = require('express-validator');
const { response } = require('express');


const productosController = {

    index: async (req, res) =>{
		let productos = await db.Producto.findAll();
		// res.send(productos);
			res.render('productos',{productos, toThousand})
        // const inSale = productos.filter(producto => producto.category== 'in-sale');
        // res.render('productos',{inSale, toThousand});
    },
    
    carDetalle:  (req, res) =>{
        res.render('productCart');
    },

    detalle: async (req, res) => {
		let product = await db.Producto.findByPk(req.params.id);
		let productos = await db.Producto.findAll();
		// res.send(product)
		// let produc = productos.find(product => product.id==req.params.id)
		// const inSale = productos.filter(producto => producto.category== 'in-sale');
		res.render('productDetail',{product,productos,toThousand})
	},

    create:  (req, res) =>{
        res.render('productCreate');
    },

	store: (req, res) => {
		

		let errors = validationResult(req);
		if (errors.isEmpty()){
		let image 
		// return res.send(req.file)
		if(req.file != undefined){
			image = req.file.filename
            console.log(req.file.filename);
		} else {
			image = 'default-image.jpg'
		}
		let producto =  db.Producto.create({
			nombre: req.body.name,
			precio: req.body.price,
			descripcion:req.body.description ,
			descuento: req.body.descuento,
			stock:parseInt(req.body.stock),
			rutaImagen: image
			
		}).then(response => {
			return res.redirect('/productos');


		}) 
		.catch(errors =>console.log(errors()))
			
		
		

		
		
	}else{
			//return res.send(errors.array())  
	
			res.render("productCreate",{errors:errors.array()})
		
		}

	},
	// Update - Form to edit
	edit: async function(req,res) {
        //buscas el producto
        let productToEdit = await db.Producto.findByPk(req.params.id);
        // formateo el release_date para que se seleccione el select
        //productToEdit.release_date = moment(productToEdit.release_date).format('YYYY-MM-DD')
        // traigo los generos
            
        res.render('productEdit',{productToEdit,toThousand});
    },

    update: (req, res) => {
		// return res.send(req.body)
		let image 
		// return res.send(req.file)
		if(req.file != undefined){
			image = req.file.filename
            console.log(req.file.filename);
		} else {
			image = 'default-image.jpg'
		}
		productToEdit = db.Producto.update({
			nombre: req.body.name,
			precio: req.body.price,
			descripcion:req.body.description ,
			descuento: req.body.descuento,
			stock:req.body.stock,
			rutaImagen: image
		},{
			where : {
				id: req.params.id
			}
		}).then(response => {

			res.redirect('/productos/productDetail/' + req.params.id);
		}).catch(errors =>console.log(errors));
		
		

	
	},
    // Delete - Delete one product from DB
	destroy : (req, res) => {
		db.Producto.destroy({
			where: {
				id: req.params.id
			}
		});
		res.redirect('/productos')
	}
}


module.exports = productosController;
