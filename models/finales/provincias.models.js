
const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
   const Provincias = sequelize.define('provincias', {
    idProvincia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
    unique: true
});
    return Provincias;
  };