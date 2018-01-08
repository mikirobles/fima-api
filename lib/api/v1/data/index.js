const express = require("express")
const {notFound, portMessage} = require('../utils')

const composicionHandler = require('./composicion')
const rendimientoHandler = require('./rendimiento')


const routes = express.Router()

// ENDPOINTS
routes.use('/:fondo/composicion', composicionHandler)
routes.use('/:fondo/rendimiento', rendimientoHandler)

module.exports = routes