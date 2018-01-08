const express = require("express")
const { notFound, portMessage } = require('../../utils')
const { getRendimiento } = require('./helpers')
const { FONDOS_DATA } = require('../../static/constants')

const routes = express.Router({
    mergeParams: true
})

// ENDPOINTS
routes.get('/', async function ( req, res ) {
    try {
        const fondoQuery = req.params.fondo;
        const fondo = FONDOS_DATA.find(fondo => fondo.id === fondoQuery)
        const rendimiento = await getRendimiento(fondo.consultaDatosId)
        res.json(rendimiento)
    } catch(err) {
        res.status(404).json({error: err})
    }
})

module.exports = routes