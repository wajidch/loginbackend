module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
        
            user_email:{
                type:DataTypes.STRING(45)
            },
            user_password:{
                type:DataTypes.STRING(45)
            },
                    
        
    },
     {
        tableName: 'users'
    });
}