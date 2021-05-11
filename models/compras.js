module.exports = function (sequelize, dataTypes){

   
    let alias = "Compra" ;

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombreProducto: {
            type: dataTypes.STRING
        },
        idProducto: {
            type: dataTypes.INTEGER
        },
        cantidadProductos: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.INTEGER
        },
        descuento: {
            type: dataTypes.DOUBLE
        },
        total: {
            type: dataTypes.INTEGER
        },
        idCliente: {
            type: dataTypes.INTEGER
        },
        nombreCliente: {
            type: dataTypes.STRING
        },
        apellidoCliente: {
            type: dataTypes.STRING
        },
        direccionCliente: {
            type: dataTypes.STRING
        },
        provinciaCliente: {
            type: dataTypes.STRING
        },
        localidadCliente: {
            type: dataTypes.STRING
        },
        cpCliente: {
            type: dataTypes.INTEGER
        },
        telefonoCliente: {
            type: dataTypes.INTEGER
        },
        celularCliente: {
            type: dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "compras",
        timestamps: false
    }

    let Compra = sequelize.define(alias, cols, config);

    Compra.associate = function(models){
        Compra.belongsTo(models.Cliente,{
            as: "comprasClientes",
            foreignKey: "idCliente",
            timestamps: false
        });

        Compra.belongsToMany(models.Producto,{
            as: "comprasProductos",
            foreignKey: "idProducto",
            timestamps: false
        })
    }


    return Compra;
}