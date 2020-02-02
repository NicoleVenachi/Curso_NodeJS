const express = require('express')

// import express from express
var app = express () //instacio  modulo express

const router = express.Router() // instancio router de express
app.use(router) //defino que router hara veces de .use

router.get('/message', function(req, res) {
  res.send('Lista de mensajes')
})

router.post('/message', function(req, res) {
  res.send('Mensaje añadido')
})
//
// app.use('/', function(req, res) {
//   res.send('Hola') //la response sera un hoa
// }) //defino peticion http al acceder a la raiz
//
app.listen(3000) //defino el puerto por el qu escucho peticiones
console.log('La aplicación está escuchando en htttp://localhots:3000')
