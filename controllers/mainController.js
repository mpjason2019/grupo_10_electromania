

const mainController ={

    index:  (req, res) =>{
        res.render('index');
    },
    contacto:  (req, res) =>{
        res.render('contacto');
    }
}

module.exports=mainController;
