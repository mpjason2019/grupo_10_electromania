module.exports = function (sequelize, dataTypes){

   
    let alias = "Cliente" ;

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contraseña: {
            type: dataTypes.STRING
        },
        telefono: {
            type: dataTypes.INTEGER
        },
        celular: {
            type: dataTypes.INTEGER
        },
        domicilio: {
            type: dataTypes.STRING
        },
        idProvincia: {
            type: dataTypes.INTEGER
        },
        idLocalidad: {
            type: dataTypes.INTEGER
        },
        condigoPostal: {
            type: dataTypes.INTEGER
        },
        celular: {
            type: dataTypes.INTEGER
        },
        provincia: {
            type: dataTypes.STRING
        },
        localidad: {
            type: dataTypes.STRING
        }

    };

    let config = {
        tableName: "clientes",
        timestamps: false
    }

    let Cliente = sequelize.define(alias, cols, config);

    Cliente.associate = function(models){
        Cliente.belongsToMany(models.Producto,{
            as: "productos",
            through: "compras",
            foreignKey: "idCliente",
            otherKey: "idProducto",
            timestamps: false
        })
    }

    return Cliente;
}