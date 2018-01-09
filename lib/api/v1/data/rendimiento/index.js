const express = require("express");
const moment = require("moment");
const { Decimal } = require("decimal.js");
const { notFound, portMessage } = require("../../utils");
const { getRendimiento, getMoney, checkFechas } = require("./helpers");
const { getFondo } = require("../../static/helpers");

const routes = express.Router({
    mergeParams: true
});

// ENDPOINTS
routes.get("/:fechaInicio?/:fechaFin?/:moneyQty?", async function(req, res) {
    try {
        const { fechaFin, fechaInicio } = req.params;
        const optionalParams = { fechaInicio, fechaFin };
        const moneyQty = req.params.moneyQty;
        const fondo = getFondo(req.params.fondo);

        if (!checkFechas([fechaInicio, fechaFin])) {
            res
                .status(400)
                .json({
                    error: "Fechas no validas: respetar el formato YYYYMMDD."
                });
            return;
        }

        let rendimientos = await getRendimiento({
            consultaDatosId: fondo.consultaDatosId,
            ...optionalParams
        });

        if (moneyQty) {
            rendimientos = getMoney(rendimientos, moneyQty);
        }

        res.json(rendimientos);
    } catch (err) {
        res.status(404).json({ error: err });
    }
});

module.exports = routes;
