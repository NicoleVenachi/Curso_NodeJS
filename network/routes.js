express = require('express')
const message = require('../components/message/network.js')

const routes = function(server) {
  //parametro servidor de express para añadir todas las rutas
  server.use('/message', message)//cada que se ingrese a /message, direccinooa al network.js del componente
} //funcion que añade todas las rutas

module.exports = routes
