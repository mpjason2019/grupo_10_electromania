const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name')
    .notEmpty().withMessage('Tienes que escribir un nombre').bail()
    .isLength({min:5}).withMessage("El nombre del producto debe tener al menos 5 caracteres"),
    body('description')
    .notEmpty().withMessage('Tienes que escribir una descripcion').bail()
    .isLength({min:20}).withMessage("La descripción debe tener al menos 20 caracteres"),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]