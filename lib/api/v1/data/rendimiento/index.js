const express = require("express");
const moment = require("moment");
const { Decimal } = require("decimal.js");
const { notFound, portMessage } = require("../../utils");
const { getRendimiento, getMoney, checkFechas } = require("./helpers");
const { getFondo } = require("../../static/helpers");

const routes = express.Router({
    mergeParams: true
});

/**
 * @api {get} /api/v1/data/:fondoId/rendimiento/:fechaInicio?/:fechaFin?/:moneyQty? Obtener el rendimiento acumulado entre dos fechas
 * @apiVersion 1.0.0
 * @apiName ObtenerRendimientoAcumulado
 * @apiGroup Informacion
 *
 * @apiParam {String} fondoId ID del fondo.
 * @apiParam {String} [fechaInicio=moment().substract(1,'year').format(YYYYMMDD)] Fecha de inicio con formato YYYYMMDD.
 * @apiParam {String} [fechaFin=moment().format(YYYYMMDD)] Fecha de fin con formato YYYYMMDD.
 * @apiParam {String} [moneyQty] Dinero.
 *
 * @apiSuccess {Object[]} response Respuesta del servidor.
 * @apiSuccess {String} response.date Fecha del rendimiento.
 * @apiSuccess {Number} response.value Valor del rendimiento.
 * @apiSuccess {Number} response.earned Dinero ganado (Solo está cuando se provee moneyQty).
 * @apiSuccess {Number} response.total Dinero total acumulado (Solo está cuando se provee moneyQty).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *               "date": "02/01/2017",
 *               "value": 0,
 *               "earned": 0,
 *               "total": 1000
 *          }
 *     ]
 *
 * @apiError error Error generico, posiblemente generado por un endpoint caído del Banco Galicia.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {},
 *     }
 */

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

        res.status(200).json(rendimientos);
    } catch (err) {
        res.status(404).json({ error: err });
    }
});

module.exports = routes;
