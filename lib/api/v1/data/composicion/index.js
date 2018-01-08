const express = require("express")
const { notFound, portMessage } = require('../../utils')
const { getComposicion } = require('./helpers')
const { FONDOS_DATA } = require('../../static/constants')

const routes = express.Router()

// ENDPOINTS
routes.get('/:fondo', async function ( req, res ) {
    try {
        const fondoQuery = req.params.fondo;
        const fondo = FONDOS_DATA.find(fondo => fondo.id === fondoQuery)
        const dataset = await getComposicion(fondo.consultaComposicionId)
        res.json(dataset)
    } catch(err) {
        res.status(404).json({error: err})
    }
})

module.exports = routes