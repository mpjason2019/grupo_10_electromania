const { SSL_OP_NO_TLSv1_1 } = require('constants');
const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productosDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController ={

    index:  (req, res) =>{
        const visited = products.filter(producto=>producto.category=='visited');
		res.render('index',{visited,toThousand});
	},
    search: (req, res) => {
		let search = req.query.keywords;
		let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));	
		res.render('results', { 
			products: productsToSearch, 
			search,
			toThousand,
		});
	},
      
    contacto:  (req, res) =>{
        res.render('contacto');
    }
}

module.exports=mainController;
