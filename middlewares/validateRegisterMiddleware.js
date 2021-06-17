const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre').bail()
	.isLength({min:2}).withMessage("El nombre debe tener al menos 2 caracteres"),
	body('apellido').notEmpty().withMessage('Tienes que escribir un Apellido').bail()
	.isLength({min:2}).withMessage("El apellido debe tener al menos 2 caracteres"),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	// body('avatar').custom((value, { req }) => {
	// 	let file = req.file;
	// 	let acceptedExtensions = ['.jpg', '.png', '.gif'];

	// 	if (!file) {
	// 		throw new Error('Tienes que subir una imagen');
	// 	} else {
	// 		let fileExtension = path.extname(file.originalname);
	// 		if (!acceptedExtensions.includes(fileExtension)) {
	// 			throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
	// 		}
	// 	}

	// 	return true;
	// })
]