module.exports = function (sequelize, dataTypes){

   
    let alias = "Localidad" ;

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        idProvincia: {
            type: dataTypes.INTEGER
        },
        localidad: {
            type: dataTypes.STRING
        }

    };

    let config = {
        tableName: "localidades",
        timestamps: false
    }

    let Localidad = sequelize.define(alias, cols, config);

    Localidad.associate = function(models){
        Localidad.belongsToMany(models.Cliente,{
            as: "localidadClientes",
            foreignKey: "idLocalidad",
            timestamps: false
        })
    },
    Localidad.associate = function(models){
        Localidad.belongsToMany(models.Provincia,{
            as: "provinciasLocalidades",
            foreignKey: "idProvincia",
            timestamps: false
        })
    }
    
    return Localidad;

}