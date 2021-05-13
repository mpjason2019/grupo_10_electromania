module.exports = function (sequelize, dataTypes){

   
    let alias = "Provincia" ;

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        provinca: {
            type: dataTypes.STRING
        }

    };

    let config = {
        tableName: "provincias",
        timestamps: false
    }

    let Provincia = sequelize.define(alias, cols, config);
   
    Provincia.associate = function(models){
        Provincia.belongsToMany(models.Cliente,{
            as: "clientes",
            foreignKey: "idProvincia",
            timestamps: false
        })
    },
    Provincia.associate = function(models){
        Provincia.belongsToMany(models.Localidad,{
            as: "localidadesProvincias",
            foreignKey: "idProvincia",
            timestamps: false
        })
    }
    return Provincia;

}