const express=require('express');
const router= express.Router();

//Controller
const usuariosController= require('../controllers/usuariosController.js')
// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');




router.get('/login',guestMiddleware, usuariosController.login);


router.get('/register', usuariosController.register);
router.post('/register', uploadFile.single('avatar'), validations, usuariosController.processRegister);




module.exports = router