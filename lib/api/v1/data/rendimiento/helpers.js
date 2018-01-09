const moment = require("moment");
const { consultaUrl } = require("./constants");
const fetch = require("isomorphic-fetch");
const parser = require("xml2json");

const now = () => moment().format("YYYYMMDD");
const aYearAgo = () =>
  moment()
    .subtract(1, "year")
    .format("YYYYMMDD");

const getRendimiento = async ({
    consultaDatosId,
    fechaInicio,
    fechaFin
}) => {
  try {
    if (!fechaInicio) fechaInicio = aYearAgo()
    if (!fechaFin) fechaFin = now()

    const fetchResponse = await fetch(consultaUrl(consultaDatosId, fechaInicio, fechaFin));
    const plainXml = await fetchResponse.text();
    const json = JSON.parse(parser.toJson(plainXml));
    const dataset = json.chart.categories.category.map((cat, index) => {
      return { date: cat.label, value: json.chart.dataset.set[index].value };
    });
    return dataset;
  } catch (err) {
    return { error: err };
  }
};

const checkFechas = (fechas) => {
    if (Array.isArray(fechas)) {
        for (let i; i < fechas.length; i++) {
            if (!moment(fechas[i], "YYYYMMDD").isValid()) return false;
        }
        return true;
    }
    return !!moment(fechas, "YYYYMMDD").isValid()
}

module.exports = {
  getRendimiento,
  checkFechas
};
