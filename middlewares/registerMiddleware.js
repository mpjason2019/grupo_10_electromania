function registerMiddleware(req, res, next) {
	if (req.session.userLogged.idPerfil == 1) {
		return res.redirect('/usuarios/register');
	}
	next();
}

module.exports = registerMiddleware;