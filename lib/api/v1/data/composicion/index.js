const express = require("express");
const { notFound, portMessage } = require("../../utils");
const { getComposicion } = require("./helpers");
const { getFondo } = require("../../static/helpers");

const routes = express.Router({
    mergeParams: true
});

// ENDPOINTS
routes.get("/", async function(req, res) {
    try {
        const fondo = getFondo(req.params.fondo);
        const dataset = await getComposicion(fondo.consultaComposicionId);
        res.status(200).json(dataset);
    } catch (err) {
        res.status(404).json({ error: err });
    }
});

module.exports = routes;
