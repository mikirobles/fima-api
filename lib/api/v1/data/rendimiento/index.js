const express = require("express");
const moment = require("moment");
const { Decimal } = require("decimal.js");
const { notFound, portMessage } = require("../../utils");
const { getRendimiento, checkFechas } = require("./helpers");
const { FONDOS_DATA } = require("../../static/constants");

const routes = express.Router({
  mergeParams: true
});

// ENDPOINTS
routes.get("/:fechaInicio?/:fechaFin?/:moneyQty?", async function(req, res) {
  try {
    const { fechaFin, fechaInicio } = req.params;
    const optionalParams = { fechaInicio, fechaFin };
    const moneyQty = req.params.moneyQty;
    const fondo = FONDOS_DATA.find(fondo => fondo.id === req.params.fondo);

    if (
      optionalParams.fechaInicio
        ? !moment(optionalParams.fechaInicio, "YYYYMMDD").isValid()
        : false || optionalParams.fechaFin
          ? !moment(optionalParams.fechaFin, "YYYYMMDD").isValid()
          : false
    ) {
      res
        .status(400)
        .json({ error: "Fechas no validas: respetar el formato YYYYMMDD." });
    }

    let rendimientos = await getRendimiento({
      consultaDatosId: fondo.consultaDatosId,
      ...optionalParams
    });

    if (moneyQty) {
      rendimientos = rendimientos.map(rendimiento => {
        const money = new Decimal(moneyQty);
        const rend = new Decimal(rendimiento.value);
        return {
          ...rendimiento,
          value: rend.toNumber(),
          earned: money.mul(rend.dividedBy(100)).toNumber(),
          total: money.plus(money.mul(rend.dividedBy(100))).toNumber()
        };
      });
    }

    res.json(rendimientos);

  } catch (err) {
    res.status(404).json({ error: err });
  }
});

module.exports = routes;
