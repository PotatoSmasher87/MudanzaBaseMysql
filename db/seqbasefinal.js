const { Sequelize } = require('sequelize');

////Aqui van los datos de coneccion a la base final

module.exports = new Sequelize('basefinal', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    // define:{
    //     freezeTableName: true
    // }
  })