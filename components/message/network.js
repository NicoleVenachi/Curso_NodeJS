const express = require('express')
const router = express.Router()

const controller = require('./controller.js')
const response = require('../../network/response.js')

router.get('/', function(req, res) {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch(e => {
      response.error(req,res,'Unexpected Error', 500, e)
    })
})

router.post('/', function(req, res) {
  controller.addMessage(req.body.user, req.body.message)
    .then((createdMessage) => {
      console.log(createdMessage)
      response.success(req, res, createdMessage, 201)
    })
    .catch(err => {
        response.error(req, res, err, 400, 'Error en el controlador')
    })
   //en el post, posteo mensaje

})

 module.exports = router
