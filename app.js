const express = require('express');
const path = require('path');
const app = express();
const rutaProductos=require('./routes/productos.js');
const rutaMain=require('./routes/main.js');
const rutaUsuarios= require('./routes/usuarios.js')
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use('/',rutaMain);
app.use('/productos',rutaProductos);
app.use('/usuarios',rutaUsuarios);


app.listen (3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});
