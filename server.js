const express = require('express') //Importo express
const bodyParser = require('body-parser')
const router = express.Router() // instancio router de express

const response = require('./network/response.js')

var app = express () //instacio  modulo express

app.use(express.json()) //defino un doy parser de JSON
app.use(express.urlencoded({extended: false})) //parser de url
app.use(router) //defino que router hara veces de .use
app.use('/app', express.static('public'))

app.listen(3000) //defino el puerto por el qu escucho peticiones

router.get('/message', function(req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro Valor Persoonalizado"
  })
  response.success(req,res, 'Lista de mensajes')
})

router.post('/message', function(req, res) {
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error inesperado', 500, 'Es solo unna simulación de errores')
  } // Simulación de error, si hay un error en el query, llama a .error
  else {}
  response.success(req, res, 'Creado correctamente', 201)
})

console.log('La aplicación está escuchando en htttp://localhots:3000')
