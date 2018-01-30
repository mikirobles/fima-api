const express = require("express")
const {notFound, portMessage} = require('../utils')

const composicionHandler = require('./composicion')
const rendimientoHandler = require('./rendimiento')
const cuotaparteHandler = require('./cuotaparte')

const routes = express.Router()

// ENDPOINTS
routes.use('/:fondo/composicion', composicionHandler)
routes.use('/:fondo/rendimiento', rendimientoHandler)
routes.use('/:fondo/cuotaparte', cuotaparteHandler)

module.exports = routes