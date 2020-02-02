const express = require('express') //Importo express
const bodyParser = require('body-parser')
const router = express.Router() // instancio router de express

var app = express () //instacio  modulo express
app.use(express.json()) //defino un doy parser de node
app.use(express.urlencoded({extended: false})) //parser de url
app.use(router) //defino que router hara veces de .use

app.listen(3000) //defino el puerto por el qu escucho peticiones

router.get('/message', function(req, res) {
  console.log(req.headers)
  res.header({
    "custom-header": "Nuestro Valor Persoonalizado"
  })
  res.send('Lista de mensajes')
})

router.delete('/message', function(req, res) {
  console.log(req.body)
  console.log(req.query)
  res.send(`Mesaje ${req.body.text} añadido correctamente`)
})

console.log('La aplicación está escuchando en htttp://localhots:3000')
