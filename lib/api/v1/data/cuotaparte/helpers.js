const moment = require("moment");
const { Decimal } = require("decimal.js");
const { consultaUrl } = require("./constants");
const fetch = require("isomorphic-fetch");
const parser = require("xml2json");

const now = () => moment().format("YYYYMMDD");
const yesterday = () => moment().subtract(1, "day").format("YYYYMMDD");
const aYearAgo = () =>
    moment()
        .subtract(1, "year")
        .format("YYYYMMDD");

const getValoresCuotaparte = async ({ consultaDatosId, fechaInicio, fechaFin }) => {
    try {
        if (!fechaInicio) fechaInicio = aYearAgo();
        if (!fechaFin) fechaFin = now();

        const fetchResponse = await fetch(
            consultaUrl(consultaDatosId, fechaInicio, fechaFin)
        );
        const plainXml = await fetchResponse.text();
        const json = JSON.parse(parser.toJson(plainXml));
        const dataset = json.chart.categories.category.map((cat, index) => {
            return {
                date: cat.label,
                value: json.chart.dataset.set[index].value
            };
        });
        return dataset;
    } catch (err) {
        return { error: err };
    }
};

const getValorCuotaparte = async ({ consultaDatosId }) => {
    try {
        let dataset;
        const fetchResponse = await fetch(
            consultaUrl(consultaDatosId, yesterday(), now())
        );
        const plainXml = await fetchResponse.text();
        const json = JSON.parse(parser.toJson(plainXml));

        if (Array.isArray(json.chart.categories.category)) {
            dataset = json.chart.categories.category.map((cat, index) => {
                return {
                    date: cat.label,
                    value: json.chart.dataset.set[index].value
                };
            });
        } else {
            dataset = {
                date: json.chart.categories.category.label,
                value: json.chart.dataset.set.value
            };
        }
        return dataset;
    } catch (err) {
        return { error: err };
    }
};

const checkFechas = fechas => {
    if (Array.isArray(fechas)) {
        for (let i = 0; i < fechas.length; i++) {
            if (fechas[i] != null && !moment(fechas[i], "YYYYMMDD").isValid())
                return false;
        }
        return true;
    }
    return !!moment(fechas, "YYYYMMDD").isValid();
};

module.exports = {
    getValoresCuotaparte,
    getValorCuotaparte,
    checkFechas
};
