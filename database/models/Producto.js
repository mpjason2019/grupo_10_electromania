module.exports = function (sequelize, dataTypes){

   
    let alias = "Producto" ;

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        descripcion: {
            type: dataTypes.TEXT
        },
        descuento: {
            type: dataTypes.DOUBLE
        },
        stock: {
            type: dataTypes.INTEGER
        },
        rutaImagen: {
            type: dataTypes.STRING
        }

    };

    let config = {
        tableName: "productos",
        timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        // Producto.belongsToMany(models.Cliente,{
        //     as: "clientes",
        //     through: "compras",
        //     foreignKey: "idProducto",
        //     otherKey: "idCliente",
        //     timestamps: false
        // })
    }
 
    return Producto;
}