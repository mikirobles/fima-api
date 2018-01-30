const express = require('express')
const {notFound, portMessage} = require('../utils')

const staticData = require('./constants')

const fondos = staticData.FONDOS_DATA
const tipos = staticData.TIPOS

const routes = express.Router()

// ENDPOINTS
routes.get('/fondos', function (req,res) {
    res.json(fondos)
})

routes.get('/tipos', function (req,res) {
    res.json(tipos)
})

routes.get('/fondo/:fondo', function (req,res) {
    const fondoQuery = req.params.fondo
    const fondo = fondos.find(fondo => fondo.id === fondoQuery)
    
    if (!fondo) notFound(req,res)

    res.status(200).json(fondo)
})

routes.get('/tipo/:tipo', function (req,res) {
    const tipoQuery = req.params.tipo
    const tipo = tipos.find(tipo => tipo.slug === tipoQuery)
    
    if (!tipo) notFound(req,res)

    res.status(200).json(tipo)
})

module.exports = routes

/**
 * @api {get} /api/v1/static/fondos Obtener la información estática de todos los fondos disponibles
 * @apiVersion 1.0.0
 * @apiName ObtenerInformaciondeTodosLosFondos
 * @apiGroup Informacion
 *
 * @apiSuccess {Object[]} response Respuesta del servidor.
 * @apiSuccess {String} response.consultaComposicionId Id que se utiliza en las queries de datos de composición del fondo.
 * @apiSuccess {Number} response.consultaDatosId Id que se utiliza en las queries de datos de rendimiento o valor de cuotaparte del fondo.
 * @apiSuccess {String} response.currency Moneda del fondo.
 * @apiSuccess {String} response.description Descripción del fondo.
 * @apiSuccess {Object} response.honorarios Honorarios para cada clase de fondo.
 * @apiSuccess {String} response.id Id de fondo.
 * @apiSuccess {Object} response.inversionMinima Inversión minima del fondo para cada clase.
 * @apiSuccess {String} response.name Nombre del fondo.
 * @apiSuccess {String} response.riesgo Riesgo del fondo.
 * @apiSuccess {String} response.shortDescription Descripcion abreviada del fondo.
 * @apiSuccess {Object} response.tipo Tipo de fondo.
 * @apiSuccess {String} response.tipo.consultaComposicionId Id que se utiliza en las queries de datos de composición del fondo.
 * @apiSuccess {String} response.tipo.description Descripcion del tipo de fondo.
 * @apiSuccess {Number} response.tipo.id Id del tipo de fondo.
 * @apiSuccess {String} response.tipo.name Nombre del tipo de fondo.
 * @apiSuccess {String} response.tipo.slug Slug del tipo de fondo.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *               "consultaComposicionId": "fima-premium",
 *               "consultaDatosId": 1280,
 *               "currency": "$ (Pesos)"
 *               "description": "Es un fondo que brinda liquidez inmediata con un rendimiento intermedio entre una caja de ahorros y un depósito a plazo fijo. Invierte principalmente en cuentas a la vista, y certificados a plazo fijo. Las inversiones se realizan con un estricto control del riesgo crediticio y un adecuado flujo de caja.",
 *               "honorarios": {
 *                     "a": 1.5,
 *                     "b": 0.75
 *               },
 *               "id": "premium",
 *               "inversionMinima": {
 *                     "a": 100,
 *                     "b": 2000000
 *               },
 *               "name": "Premium",
 *               "riesgo": "Bajo",
 *               "shortDescription": "Depósitos a plazo fijo, cuentas a la vista y pases pasivos en el BCRA, entre otros.",
 *               "tipo": {
 *                     "consultaComposicionId": "fondos-de-plazo-fijo",
 *                     "description": "Estos fondos, invierten principalmente en depósitos a plazo fijo, cuentas corrientes remuneradas en entidades financieras y operaciones de pase en el Banco Central de la República Argentina, que le otorgan un alto grado de liquidez y estabilidad en sus rendimientos.",
 *                     "id": 1,
 *                     "name": "Plazo Fijo",
 *                     "slug": "plazofijo"
 *                }
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

   /**
 * @api {get} /api/v1/static/fondo/:fondo Obtener la información estática de un fondo específico
 * @apiVersion 1.0.0
 * @apiName ObtenerInformaciondeFondo
 * @apiGroup Informacion
 * 
 * @apiParam {String} fondo Id del fondo.
 *
 * @apiSuccess {Object} response Respuesta del servidor.
 * @apiSuccess {String} response.consultaComposicionId Id que se utiliza en las queries de datos de composición del fondo.
 * @apiSuccess {Number} response.consultaDatosId Id que se utiliza en las queries de datos de rendimiento o valor de cuotaparte del fondo.
 * @apiSuccess {String} response.currency Moneda del fondo.
 * @apiSuccess {String} response.description Descripción del fondo.
 * @apiSuccess {Object} response.honorarios Honorarios para cada clase de fondo.
 * @apiSuccess {String} response.id Id de fondo.
 * @apiSuccess {Object} response.inversionMinima Inversión minima del fondo para cada clase.
 * @apiSuccess {String} response.name Nombre del fondo.
 * @apiSuccess {String} response.riesgo Riesgo del fondo.
 * @apiSuccess {String} response.shortDescription Descripcion abreviada del fondo.
 * @apiSuccess {Object} response.tipo Tipo de fondo.
 * @apiSuccess {String} response.tipo.consultaComposicionId Id que se utiliza en las queries de datos de composición del fondo.
 * @apiSuccess {String} response.tipo.description Descripcion del tipo de fondo.
 * @apiSuccess {Number} response.tipo.id Id del tipo de fondo.
 * @apiSuccess {String} response.tipo.name Nombre del tipo de fondo.
 * @apiSuccess {String} response.tipo.slug Slug del tipo de fondo.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "consultaComposicionId": "fima-premium",
 *         "consultaDatosId": 1280,
 *         "currency": "$ (Pesos)"
 *         "description": "Es un fondo que brinda liquidez inmediata con un rendimiento intermedio entre una caja de ahorros y un depósito a plazo fijo. Invierte principalmente en cuentas a la vista, y certificados a plazo fijo. Las inversiones se realizan con un estricto control del riesgo crediticio y un adecuado flujo de caja.",
 *         "honorarios": {
 *               "a": 1.5,
 *               "b": 0.75
 *               },
 *         "id": "premium",
 *         "inversionMinima": {
 *               "a": 100,
 *               "b": 2000000
 *               },
 *         "name": "Premium",
 *         "riesgo": "Bajo",
 *         "shortDescription": "Depósitos a plazo fijo, cuentas a la vista y pases pasivos en el BCRA, entre otros.",
 *         "tipo": {
 *               "consultaComposicionId": "fondos-de-plazo-fijo",
 *               "description": "Estos fondos, invierten principalmente en depósitos a plazo fijo, cuentas corrientes remuneradas en entidades financieras y operaciones de pase en el Banco Central de la República Argentina, que le otorgan un alto grado de liquidez y estabilidad en sus rendimientos.",
 *               "id": 1,
 *               "name": "Plazo Fijo",
 *               "slug": "plazofijo"
 *           }
 *      }
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
 * @api {get} /api/v1/static/tipos Obtener la información estática de todos los tipos de fondo disponibles
 * @apiVersion 1.0.0
 * @apiName ObtenerInformaciondeTodosLosTiposdeFondo
 * @apiGroup Informacion
 * 
 *
 * @apiSuccess {Object[]} response Respuesta del servidor.
 * @apiSuccess {String} response.consultaComposicionId Id que se utiliza en las queries de datos de composición del fondo.
 * @apiSuccess {String} response.description Descripcion del tipo de fondo.
 * @apiSuccess {Number} response.id Id del tipo de fondo.
 * @apiSuccess {String} response.name Nombre del tipo de fondo.
 * @apiSuccess {String} response.slug Slug del tipo de fondo.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "consultaComposicionId": "fondos-de-plazo-fijo",
 *             "description": "Estos fondos, invierten principalmente en depósitos a plazo fijo, cuentas corrientes remuneradas en entidades financieras y operaciones de pase en el Banco Central de la República Argentina, que le otorgan un alto grado de liquidez y estabilidad en sus rendimientos.",
 *             "id": 1,
 *             "name": "Plazo Fijo",
 *             "slug": "plazofijo"
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

 /**
 * @api {get} /api/v1/static/tipo/:tipo Obtener la información estática de un tipo de fondo específico
 * @apiVersion 1.0.0
 * @apiName ObtenerInformaciondeTipodeFondo
 * @apiGroup Informacion
 * 
 * @apiParam {String} tipo Slug del fondo. 
 *
 * @apiSuccess {Object} response Respuesta del servidor.
 * @apiSuccess {String} response.consultaComposicionId Id que se utiliza en las queries de datos de composición del fondo.
 * @apiSuccess {String} response.description Descripcion del tipo de fondo.
 * @apiSuccess {Number} response.id Id del tipo de fondo.
 * @apiSuccess {String} response.name Nombre del tipo de fondo.
 * @apiSuccess {String} response.slug Slug del tipo de fondo.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "consultaComposicionId": "fondos-de-plazo-fijo",
 *          "description": "Estos fondos, invierten principalmente en depósitos a plazo fijo, cuentas corrientes remuneradas en entidades financieras y operaciones de pase en el Banco Central de la República Argentina, que le otorgan un alto grado de liquidez y estabilidad en sus rendimientos.",
 *          "id": 1,
 *          "name": "Plazo Fijo",
 *          "slug": "plazofijo"
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
