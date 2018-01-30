const consultaUrl = (id, fechaInicio, fechaFinal) => `http://www.fondosfima.com.ar/personas/herramientas/consultadatoshistoricos.aspx?tipo_comp=P&fondos=${id}&fecha_desde=${fechaInicio}&fecha_hasta=${fechaFinal}`

module.exports = {
    consultaUrl
}