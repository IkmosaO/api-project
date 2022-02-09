/* eslint-disable no-console */
const express = require('express')
const regionRouters = require('./routes/regionRoutes')
const teamRouters = require('./routes/teamRoutes')


const app = express()

app.use(express.static('public'))

app.use(express.json())

app.set('view engine', 'pug')

app.get('/api/documentation', (request, response) => {
  return response.render('index')
})

app.use('/api/teams', teamRouters)
app.use('/api/regions', regionRouters)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1340, () => {
  console.log('listening on port 1340')
})
