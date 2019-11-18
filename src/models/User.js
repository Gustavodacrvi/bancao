const {Model, DataTypes} = require('sequelize')

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize: sequelize
        }
        )
    }
    static associate(models){
        this.hasMany(models.Client, {foreignKey: 'user_id', as: 'clients'})
    }
}

module.exports = User