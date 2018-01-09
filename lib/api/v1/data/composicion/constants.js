const Rand = () => Math.floor(Math.random() * 10000000);

const consultaUrl = id =>
    `http://www.fondosfima.com.ar/personas/nuestros-fondos/fondos-de-acciones/${id}/composicion/?rnd=${Rand()}`

module.exports = {
    consultaUrl
};
