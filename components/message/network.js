const express = require('express')
const router = express.Router()

const response = require('../../network/response.js')

router.get('/', function(req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro Valor Persoonalizado"
  })
  response.success(req,res, 'Lista de mensajes')
})

router.post('/', function(req, res) { // ya no necesito / message, la nomenclatura la da el servidor de rutas
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error inesperado', 500, 'Es solo unna simulación de errores')
    return // el código no continúa si encuentra el error
  } // Simulación de error, si hay un error en el query, llama a .error
  else {}
  response.success(req, res, 'Creado correctamente', 201)
})

 module.exports = router
