exports.success = function (req, res, message, status){
  res.status(status || 200).send({
    error: '',
    boyd: message
  })
}

exports.error = function (req, res, message, status, details){
  console.error(`[respose error] ${details}`)
  res.status(status || 200).send({
    error: message,
    boyd: ''
  })
}
