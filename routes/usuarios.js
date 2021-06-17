const express=require('express');
const router= express.Router();

//Controller
const usuariosController= require('../controllers/usuariosController.js')
// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validationLogin = require('../middlewares/validacionregistrologin');
const validacionregistrologin = require('../middlewares/validacionregistrologin');
const adminMiddleware = require('../middlewares/adminMiddleware.js');


//clientes
router.get('/', adminMiddleware, usuariosController.index);   

// Formulario de registro
router.get('/register', guestMiddleware, usuariosController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usuariosController.processRegister);

//Editar Cliente
router.get('/:id/edit',adminMiddleware, usuariosController.edit);
router.put('/:id/edit', validations, usuariosController.updateUser);

// router.post('/productCart', usuariosController.processRegister);

router.delete('/:id/edit', usuariosController.destroy); 

//Formulario de login
router.get('/login',guestMiddleware,usuariosController.login);

// Procesar el login
router.post('/login',validacionregistrologin, usuariosController.loginProcess);

//Perfil de Usuario
router.get('/profile/', authMiddleware, usuariosController.profile);

// Logout
router.get('/logout/', usuariosController.logout);

router.get('/403/', usuariosController.error403)

module.exports = router