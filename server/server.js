const path = require('path')
const express = require('express')

const chemRoutes = require('./routes/chemicals')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/chemicals', chemRoutes)

module.exports = server
