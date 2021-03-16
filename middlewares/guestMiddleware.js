function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/usuarios/profile');
	}
	next();
}

module.exports = guestMiddleware;