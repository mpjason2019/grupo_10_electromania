const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');

const db = require('../database/models');
const sequelize = db.Sequelize;
const Op = sequelize.Op


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

    processRegister: async (req, res) => {
		
		let errors = validationResult(req);
		//return res.send(errors)
		if (errors.isEmpty())
		{let usuario = await db.Cliente.create({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			email:req.body.email ,
			password: req.body.password,
			telefono:req.body.telefono ,
			celular: req.body.celular,
			domicilio: req.body.domicilio,
			codigoPostal: req.body.codigoPostal,
			provincia:req.body.provincia,
			localidad: req.body.localidad

		 })
			return res.redirect('/usuarios/profile');
		
	}else{
		//return res.send(errors.array())  
		res.render("register",{errors:errors.array()})
	}
	
			
			
		
		

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
			codigoPostal: req.body.codigoPostal,
			provincia:req.body.provincia,
			localidad: req.body.localidad
	
		},{
			where : {
				id: req.params.id
			}
		}).then(respuesta => {
			return res.redirect('/usuarios');
		}) ;
		
		// res.redirect('/');

		
	
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

	loginProcess: async (req, res) => {
        let userToLogin = await db.Cliente.findOne({
            where: {
                email: { [Op.like]: req.body.email }
            }
        })
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                // res.send(userToLogin)
                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: 5 * 60 * 1000 }); //probamos otra opcion 'email'
                }

                return res.redirect('profile');
            } 
			else {//si no coincide la contraseña se renderiza la vista de login con error
                res.render("login", {
                   old: req.body, errors: {
                        email: {
                            msg: "Las credenciales son invalidas"
                        }
                    }
                })
            }

        } else { //si no se encuentra el mail, volvemos a renderizar la vista de login con mensaje de error
            res.render("./usuarios/login", {
                titulo: "Ingresá", errors: {
                    email: {
                        msg: "El usuario no se encuentra en la base de datos"
                    }
                }
            })
        }
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
