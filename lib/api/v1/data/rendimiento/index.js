const express = require("express")
const { notFound, portMessage } = require('../../utils')

const { FONDOS_DATA } = require('../../static/constants')

const routes = express.Router()

// ENDPOINTS
routes.get('/:fondo', async function ( req, res ) {
    try {
        const fondoQuery = req.params.fondo;
        // WIP
    } catch(err) {
        res.status(404).json({error: err})
    }
})

module.exports = routes