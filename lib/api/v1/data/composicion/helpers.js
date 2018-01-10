const fetch = require("isomorphic-fetch");
const { consultaUrl } = require("./constants");
const parser = require("xml2json");

const getComposicion = async (idFondo, idTipo) => {
    try {
        const dataFetch = await fetch(consultaUrl(idFondo, idTipo));
        const plainXml = await dataFetch.text();
        const json = JSON.parse(parser.toJson(plainXml));
        const dataset = json.chart.set;
        return dataset;
    } catch (err) {
        throw { error: err };
    }
};

module.exports = {
    getComposicion
};
