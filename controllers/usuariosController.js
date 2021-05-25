const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');

const db = require('../database/models');
const sequelize = db.sequelize;

// const User = require('../database/models');

const usuariosController ={

    index: async (req, res) =>{
		let clientes = await db.Cliente.findAll();
		// res.send(productos);
			res.render('clientesList',{clientes})
        // const inSale = productos.filter(producto => producto.category== 'in-sale');
        // res.render('productos',{inSale, toThousand});
    },


    register: (req, res) =>{
        res.render('register');
    },

    processRegister: (req, res) => {
	
			
			let usuario = db.Cliente.create({
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				email:req.body.email ,
				password: req.body.password,
				telefono:req.body.telefono ,
				celular: req.body.celular,
				domicilio: req.body.domicilio,
				idProvincia: req.body.idProvincia,
				idLocalidad: req.body.idLocalidad,
				codigoPostal: req.body.codigoPostal,
				idPerfil: req.body.idPerfil,
				provincia:req.body.provincia,
				localidad: req.body.localidad
		
			});
			res.redirect('/usuarios');
		

    },

	edit: async function(req,res) {
        //buscas el cliente
        let clienteToEdit = await db.Cliente.findByPk(req.params.id);
		res.render('clienteToEdit',{clienteToEdit});

	},
	updateUser: (req, res) => {

			db.Cliente.update({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			email:req.body.email ,
			password: req.body.password,
			telefono:req.body.telefono ,
			celular: req.body.celular,
			domicilio: req.body.domicilio,
			idProvincia: req.body.idProvincia,
			idLocalidad: req.body.idLocalidad,
			codigoPostal: req.body.codigoPostal,
			idPerfil: req.body.idPerfil,
			provincia:req.body.provincia,
			localidad: req.body.localidad
	
		},{
			where : {
				id: req.params.id
			}
		});
		
		// res.redirect('/');

		return res.redirect('/usuarios/');
	
	},
	
		 // Delete - Delete one client from DB
	 destroy : (req, res) => {
		db.Cliente.destroy({
			where: {
				id: req.params.id
			}
		});
		res.redirect('/usuarios')
	},

	login:  (req, res) =>{
        res.render('login');
    },

	loginProcess: (req, res) => {
		let userToLogin =  User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000*60)*60 })
				}

				return res.redirect('/usuarios/profile');
			} 
			return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
	
	profile: (req, res) => {
		return res.render('userProfile', {user: req.session.userLogged});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}
module.exports=usuariosController;
