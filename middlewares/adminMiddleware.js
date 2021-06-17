function adminMiddleware(req, res, next) {
    // return res.send(req.session.userLogged)
	if (!req.session.userLogged)  {
		return res.redirect('/usuarios/login');
	}else if(req.session.userLogged.idPerfil != 1){return res.render('403')}
	next();
}


module.exports = adminMiddleware;