const express = require('express') //Importo express

const router = require('./network/routes.js')

var app = express () //instacio  modulo express

app.use(express.json()) //defino un doy parser de JSON
app.use(express.urlencoded({extended: false})) //parser de url
// app.use(router) //En caso de que router fuera e network.js de algun componente
router(app)

app.use('/app', express.static('public'))

app.listen(3000) //defino el puerto por el qu escucho peticiones


console.log('La aplicación está escuchando en htttp://localhots:3000')
