/* eslint-disable no-console */
const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index')
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1340, () => {
  console.log('listening on port 1340')
})
