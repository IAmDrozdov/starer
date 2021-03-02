const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
    class Star extends Model {}
    Star.init({
        type: {
            type: DataTypes.STRING,
            allowNull: false
          },
    }, {
        sequelize,
        timestamps: true,
        updatedAt: false,
        indexes: [{ fields: ['type'] }]
    })

    return Star;
  };