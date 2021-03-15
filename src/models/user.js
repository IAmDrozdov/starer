const { Model, DataTypes } = require('sequelize');

const Star = require('./star');

module.exports = sequelize => {
    class User extends Model {};
    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,    
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            set(val) { this.setDataValue('email', val.toLowerCase()); },
            validate: {
                isEmail: true,
            }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }, {
        sequelize,
        timestamps: true,
        updatedAt: false,
    });
    return User;
};