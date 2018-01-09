const express = require('express')
const {notFound, portMessage} = require('../utils')

const staticData = require('./constants')

const fondos = staticData.FONDOS_DATA
const tipos = staticData.TIPOS

const routes = express.Router()

// ENDPOINTS
routes.get('/fondos', function (req,res) {
    res.json(fondos)
})

routes.get('/tipos', function (req,res) {
    res.json(tipos)
})

routes.get('/fondo/:fondo', function (req,res) {
    const fondoQuery = req.params.fondo
    const fondo = fondos.find(fondo => fondo.id === fondoQuery)
    
    if (!fondo) notFound(req,res)

    res.status(200).json(fondo)
})

routes.get('/tipo/:tipo', function (req,res) {
    const tipoQuery = req.params.tipo
    const tipo = tipos.find(tipo => tipo.slug === tipoQuery)
    
    if (!tipo) notFound(req,res)

    res.status(200).json(tipo)
})

module.exports = routes