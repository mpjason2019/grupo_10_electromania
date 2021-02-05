const express = require('express');
const path = require('path');
const app = express();

// const publicpath = path.resolve('public');
app.use(express.static('./public'));
// app.use(express.static('./views'));


app.get('/', (req, res) =>{
    res.sendFile( path.resolve ('./views/home.html'));

});
app.get('/login', (req, res) =>{
    res.sendFile( path.resolve ('./views/Login.html'));

});
app.get('/tiendas_oficiales', (req, res) =>{
    res.sendFile( path.resolve ('./views/tiendas_oficiales.html'));

});app.get('/vender', (req, res) =>{
    res.sendFile( path.resolve ('./views/vender.html'));
});

app.get('/ayuda', (req, res) =>{
    res.sendFile( path.resolve ('./views/ayuda.html'));
});

app.get('/crea_tu_cuenta', (req, res) =>{
    res.sendFile( path.resolve ('./views/crea_tu_cuenta.html'));
});

app.get('/ingresa', (req, res) =>{
    res.sendFile( path.resolve ('./views/ingresa.html'));
});

app.get('/mis_compras', (req, res) =>{
    res.sendFile( path.resolve ('./views/mis_compras.html'));
});
app.get('/producto', (req, res) =>{
    res.sendFile( path.resolve ('./views/product.html'));
});
app.listen (3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});
