// const { SSL_OP_NO_TLSv1_1 } = require('constants');
// const path = require('path');
// const fs = require('fs');
// const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
// const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const sequelize = db.sequelize;


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
		let image
		
		if(req.file != undefined){
			image = req.file.filename
            console.log(req.file.filename);
		} else {
			image = 'default-image.png'
		}
		
		let ids = productos.map(p=>p.id)
		let newProduct = {
			id: Math.max(...ids)+1,
			...req.body,
			image: image
		};
		// res.send(newProduct)
		productos.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '));
		res.redirect('/');
	},
	// Update - Form to edit
	edit: (req, res) => {
		let productToEdit = productos.find(product=>product.id==req.params.id)
		res.render('productEdit',{productToEdit,toThousand})
	},
    update: (req, res) => {
		let id = req.params.id;
		let productToEdit = productos.find(product => product.id == id)
		let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = productos.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},
    // Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = productos.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
}


module.exports = productosController;
