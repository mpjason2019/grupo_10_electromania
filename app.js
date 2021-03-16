const express = require('express');
const path = require('path');
const app = express();
const rutaProductos=require('./routes/productos.js');
const rutaMain=require('./routes/main.js');
const rutaUsuarios= require('./routes/usuarios.js');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser')


const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded({ extended: false }));


app.use(express.static('./public'));
app.use(methodOverride("_method"));

app.set('view engine', 'ejs');

app.use('/',rutaMain);
app.use('/productos',rutaProductos);
app.use('/usuarios',rutaUsuarios);



app.listen (3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});
