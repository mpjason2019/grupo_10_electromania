module.exports = function (sequelize, dataTypes){

   
    let alias = "Perfil" ;

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        perfil: {
            type: dataTypes.STRING
        }

    };

    let config = {
        tableName: "perfiles",
        timestamps: false
    }

    let Perfil = sequelize.define(alias, cols, config);
    
    Perfil.associate = function(models){
        Perfil.belongsToMany(models.Cliente,{
            as: "perfilClientes",
            foreignKey: "idPerfil",
            timestamps: false
        })
    }
    
    return Perfil;

}