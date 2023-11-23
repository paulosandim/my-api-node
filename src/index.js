const express = require('express')
const app = express()

app.get('/', function(request, response) {
  return response.json({
    message: 'Hello world!!'
  })
})
