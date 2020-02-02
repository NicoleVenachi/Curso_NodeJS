const express = require('express')
// import express from express

var app = express ()

app.use('/', function(req, res) {
  res.send('Hola')
})

app.listen(3000)
console.log('La aplicación está escuchando en htttp://localhots:3000')
