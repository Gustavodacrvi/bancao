const {Model, DataTypes} = require('sequelize')

class Client extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING
        },{
            sequelize: sequelize
        }
        )
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Client