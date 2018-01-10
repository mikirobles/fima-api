const Rand = () => Math.floor(Math.random() * 10000000);

const consultaUrl = (fondoId, tipoId) =>
    `http://www.fondosfima.com.ar/personas/nuestros-fondos/${tipoId}/${fondoId}/composicion/?rnd=${Rand()}`

module.exports = {
    consultaUrl
};
