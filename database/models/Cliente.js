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
        password: {
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
        codigoPostal: {
            type: dataTypes.INTEGER
        },
        idPerfil: {
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

    // Cliente.associate = function(models){
    //     Cliente.belongsTo(models.Provincia,{
    //         as: "provincias",
    //         foreignKey: "idProvincia",
    //         timestamps: false
    //     })
    // },
    // Cliente.associate = function(models){
    //     Cliente.belongsTo(models.localidad,{
    //         as: "localidades",
    //         foreignKey: "idLocalidad",
    //         timestamps: false
    //     })
    // },
    // Cliente.associate = function(models){
    //     Cliente.belongsTo(models.Perfil,{
    //         as: "perfiles",
    //         foreignKey: "idPerfil",
    //         timestamps: false
    //     })
    // }

    return Cliente;
}