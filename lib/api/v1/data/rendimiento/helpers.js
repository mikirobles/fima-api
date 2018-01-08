const moment = require('moment')
const { consultaUrl } = require('./constants')
const fetch = require('isomorphic-fetch')
const parser = require('xml2json')

const now = () => {
    moment().format('YYYYMMDD')
}

const aYearAgo = () => {
    moment().subtract(1, 'year').format('YYYYMMDD')
}

const getRendimiento = async (id, fechaInicio = aYearAgo(), fechaFin = aYearAgo()) => {
    try {
        const fetchResponse = await fetch(consultaUrl(id, fechaInicio, fechaFin))
        const plainXml = await fetchResponse.text()
        const json = JSON.parse(parser.toJson(plainXml))
        return json
    } catch(err) {
        return {error: err}
    }
}

module.exports = {
    getRendimiento
}