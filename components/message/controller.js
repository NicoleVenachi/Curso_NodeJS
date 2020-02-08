const store = require('./store')

//Define lo que sucede con datos, en esta carpeta
function addMessage(user, message) { //quien la añado y mensaje
  return new Promise((resolve,reject) => {
    if(!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Los datos son incorrectos')
      return false
    }
    //resolve
    const fullMessage = {
      user: user,
      messsage: message,
      date: new Date(),
    }
    store.add(fullMessage)
    resolve(fullMessage)
  })
}

function getMessages() {
  // por coherencia, trabatar como promesa, y esta opcion de que falle o salga bien
  return new Promise((resolve,reject) => {
    resolve(store.list())
  })
}

module.exports = {
  addMessage,
  getMessages,
}  // exporta todo como un objeto
