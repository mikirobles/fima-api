const express = require("express");
const { notFound, portMessage } = require("../../utils");
const { getComposicion } = require("./helpers");
const { getFondo } = require("../../static/helpers");

const routes = express.Router({
    mergeParams: true
});

/**
 * @api {get} /api/v1/data/:fondoId/composicion Obtener la composición de un fondo
 * @apiVersion 1.0.0
 * @apiName ObtenerComposicion
 * @apiGroup Informacion
 *
 * @apiParam {String} fondoId ID del fondo.
 *
 * @apiSuccess {Object} response Respuesta del servidor.
 * @apiSuccess {Number} response.label Nombre del activo.
 * @apiSuccess {Number} response.value Porcentaje del fondo compuesto por dicho activo.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "response": [
 *          {
 *               "label": "Cta. Renumerada",
 *               "value": "71.20",
 *          }
 *       ]
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

// ENDPOINTS
routes.get("/", async function(req, res) {
    try {
        const fondo = getFondo(req.params.fondo);
        const dataset = await getComposicion(fondo.consultaComposicionId, fondo.tipo.consultaComposicionId);
        res.status(200).json(dataset);
    } catch (err) {
        res.status(404).json({ ...err });
    }
});

module.exports = routes;
