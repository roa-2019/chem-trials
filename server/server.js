const path = require('path')
const express = require('express')

const chemRoutes = require('./routes/chemicals')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use('/api/v1/chemicals', chemRoutes)

module.exports = server
