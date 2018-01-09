const { FONDOS_DATA } = require("./constants");

const getFondo = fondoId => FONDOS_DATA.find(fondo => fondo.id === fondoId);

module.exports = {
    getFondo
};
