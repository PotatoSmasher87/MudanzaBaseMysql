const { Sequelize } = require('sequelize');

////Aqui van los datos de coneccion a la base donante

module.exports = new Sequelize('basedonante', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    // define:{
    //     freezeTableName: true
    // }
  })