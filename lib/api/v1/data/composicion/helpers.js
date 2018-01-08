const fetch = require('isomorphic-fetch')
const {consultaUrl} = require('./constants')
const parser = require('xml2json');

const Rand = () => Math.floor(Math.random()*10000000);

const getComposicion = async (consultaComposicionId) => {
    try {
        const dataFetch = await fetch(`${consultaUrl}${consultaComposicionId}/composicion/?rnd=${Rand()}`)
        const plainXml = await dataFetch.text()
        const json = JSON.parse(parser.toJson(plainXml))
        const dataset = json.chart.set
        return dataset
    } catch(err) {
        return {error: err}
    }
}

module.exports = {
    getComposicion
}