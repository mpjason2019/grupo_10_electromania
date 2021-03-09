const { SSL_OP_NO_TLSv1_1 } = require('constants');
const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productosController ={

    index:  (req, res) =>{
        const inSale = productos.filter(producto => producto.category== 'in-sale');
        res.render('productos',{inSale, toThousand});
    },
    
    carDetalle:  (req, res) =>{
        res.render('productCart');
    },

    detalle:  (req, res) => {
		let produc = productos.find(product => product.id==req.params.id)
		res.render('productDetail',{produc,toThousand})
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

    
    
}


module.exports=productosController;
