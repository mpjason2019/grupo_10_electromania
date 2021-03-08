const express=require('express');
const router= express.Router();
const usuariosController= require('../controllers/usuariosController.js')



router.get('/login',usuariosController.login);


router.get('/register', usuariosController.register);




module.exports = router