const express = require('express');
const path = require('path');
const app = express();

// const publicpath = path.resolve('public');
app.use(express.static('./public'));
// app.use(express.static('./views'));


app.get('/', (req, res) =>{
    res.sendFile( path.resolve ('./views/index.html'));

});
app.get('/login', (req, res) =>{
    res.sendFile( path.resolve ('./views/Login.html'));
    
});

app.get('/producto', (req, res) =>{
    res.sendFile( path.resolve ('./views/productDetail.html'));
});

app.get('/register', (req, res) =>{
    res.sendFile( path.resolve ('./views/register.html'));
});


app.get('/cart', (req, res) =>{
    res.sendFile( path.resolve ('./views/productCart.html'));
});

app.listen (3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});
