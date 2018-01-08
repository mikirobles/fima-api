const express = require("express")
const {notFound, portMessage} = require('../utils')

const composicionHandler = require('./composicion')

const routes = express.Router()

// ENDPOINTS
routes.use('/composicion', composicionHandler)

module.exports = routes