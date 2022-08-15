const express = require("express");
const app = express()
const Sequelize = require('sequelize');
const seqdonante = require("./db/seqbasedonante");
const seqfinal = require("./db/seqbasefinal");

const Provincias = require('./models/donantes/provincias.models')(seqdonante)

const ProvinciasF = require('./models/finales/provincias.models')(seqfinal)



app.listen(3000)

console.log("Server is listening on port 3000")

seqfinal.sync({ alter: true }).then(()=> console.log('conexion dbfinal con exito')
).catch(async (e)=>{
    console.log(e);
    console.log('No database was found');
    });


seqdonante.sync({ alter: true }).then((data)=> {

  return Provincias.findAll()
}
  ).then((data)=>  {data.forEach(element => {
    ProvinciasF.create(element.toJSON())
  });}


).catch(async (e)=>{
console.log(e);
console.log('No database was found');
})
