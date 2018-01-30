const express = require("express");
const moment = require("moment");
const { Decimal } = require("decimal.js");
const { notFound, portMessage } = require("../../utils");
const { getValoresCuotaparte, getValorCuotaparte, checkFechas } = require("./helpers");
const { getFondo } = require("../../static/helpers");

const routes = express.Router({
    mergeParams: true
});

/**
 * @api {get} /api/v1/data/:fondoId/cuotaparte/actual Obtener el valor actual de la cuotaparte de un fondo
 * @apiVersion 1.0.0
 * @apiName ObtenerValorActualDeCuotaparte
 * @apiGroup Informacion
 *
 * @apiParam {String} fondoId ID del fondo.
 *
 * @apiSuccess {Object} response Respuesta del servidor.
 * @apiSuccess {String} response.date Fecha del valor de cuotaparte.
 * @apiSuccess {Number} response.value Valor de cuotaparte.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "date": "02/01/2017",
 *         "value": 0
 *     }
 *
 * @apiError error Error generico, posiblemente generado por un endpoint caído del Banco Galicia.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {},
 *     }
 */


/**
 * @api {get} /api/v1/data/:fondoId/cuotaparte/:fechaInicio?/:fechaFin? Obtener el valores historicos de la cuotaparte de un fondo
 * @apiVersion 1.0.0
 * @apiName ObtenerValorHistoricoDeCuotaparte
 * @apiGroup Informacion
 *
 * @apiParam {String} fondoId ID del fondo.
 * @apiParam {String} [fechaInicio=moment().substract(1,'year').format(YYYYMMDD)] Fecha de inicio con formato YYYYMMDD.
 * @apiParam {String} [fechaFin=moment().format(YYYYMMDD)] Fecha de fin con formato YYYYMMDD.
 *
 * @apiSuccess {Object[]} response Respuesta del servidor.
 * @apiSuccess {String} response.date Fecha de valor de cuotaparte.
 * @apiSuccess {Number} response.value Valor de cuotaparte.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *               "date": "02/01/2017",
 *               "value": 0
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

routes.get("/actual", async function(req, res) {
    try {
        const fondo = getFondo(req.params.fondo);

        const valorCuotaparte = await getValorCuotaparte({
            consultaDatosId: fondo.consultaDatosId,
        });

        res.status(200).json(valorCuotaparte);
    } catch (err) {
        res.status(404).json({ error: err });
    }
});

routes.get("/:fechaInicio?/:fechaFin?", async function(req, res) {
    try {
        const { fechaFin, fechaInicio } = req.params;
        const optionalParams = { fechaInicio, fechaFin };
        const fondo = getFondo(req.params.fondo);

        if (!checkFechas([fechaInicio, fechaFin])) {
            res
                .status(400)
                .json({
                    error: "Fechas no validas: respetar el formato YYYYMMDD."
                });
            return;
        }

        const valoresCuotaparte = await getValoresCuotaparte({
            consultaDatosId: fondo.consultaDatosId,
            ...optionalParams
        });

        res.status(200).json(valoresCuotaparte);
    } catch (err) {
        res.status(404).json({ error: err });
    }
});

module.exports = routes;
