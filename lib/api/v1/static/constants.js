const TIPOS = [
    {
        id: 1,
        slug: "plazofijo",
        name: "Plazo Fijo",
        description: "Estos fondos, invierten principalmente en depósitos a plazo fijo, cuentas corrientes remuneradas en entidades financieras y operaciones de pase en el Banco Central de la República Argentina, que le otorgan un alto grado de liquidez y estabilidad en sus rendimientos."
    },
    {
        id: 2,
        slug: "bonos",
        name: "Bonos",
        description: "Invierten en títulos públicos y privados, locales y del exterior con distintos niveles de volatilidad y horizontes de inversión."
    },
    {
        id: 3,
        slug: "acciones",
        name: "Acciones",
        description: "Las acciones de sociedades anónimas son los activos que componen -en su mayoría- la cartera de inversión de este tipo de fondos. De acuerdo a la política de inversión de cada fondo, Ud. encontrará aquellos que invierten en acciones locales que cotizan en la Bolsa de Comercio de Buenos Aires (panel Merval), como así también aquellos que lo hacen en mercados accionarios internacionales."
    }
]

const RIESGOS = {
    1: "Bajo",
    2: "Bajo/Medio",
    3: "Medio",
    4: "Medio/Alto",
    5: "Alto"
}

const CLASES = {
    1: "a",
    2: "b",
    3: "c"
}

const CURRENCIES = {
    1: "$ (Pesos)",
    2: "U$S (Dólares)"
}

const FONDOS_DATA = [
    {
        id: "premium",
        consultaDatosId: 1280,
        consultaComposicionId: 'fima-premium',
        name: "Premium",
        tipo: TIPOS.find(tipo => tipo.id === 1),
        riesgo: RIESGOS[1],
        honorarios: {
            [CLASES[1]]: 1.5,
            [CLASES[2]]: .75
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 2000000
        },
        description: "Es un fondo que brinda liquidez inmediata con un rendimiento intermedio entre una caja de ahorros y un depósito a plazo fijo. Invierte principalmente en cuentas a la vista, y certificados a plazo fijo. Las inversiones se realizan con un estricto control del riesgo crediticio y un adecuado flujo de caja.",
        shortDescription: "Depósitos a plazo fijo, cuentas a la vista y pases pasivos en el BCRA, entre otros.",
        currency: CURRENCIES[1]
    },
    {
        id: "ahorropesos",
        consultaDatosId: 1127,
        consultaComposicionId: 'fima-ahorro-pesos',
        name: "Ahorro Pesos",
        tipo: TIPOS.find(tipo => tipo.id === 2),
        riesgo: RIESGOS[1],
        honorarios: {
            [CLASES[1]]: 2.1,
            [CLASES[2]]: 1.85,
            [CLASES[3]]: 1.55
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 500000,
            [CLASES[3]]: 5000000,
        },
        description: "El objetivo del fondo es maximizar el rendimiento de una cartera de activos de renta fija en pesos de corto plazo. La política de inversión prioriza la preservación de capital y la estabilidad de rendimientos. El patrimonio incluye títulos emitidos por el BCRA, Fideicomisos Financieros y Plazos Fijos, entre otros.",
        shortDescription: "Títulos emitidos por el BCRA de corto plazo, fideicomisos financieros y certificados a plazo fijo, entre otros.",
        currency: CURRENCIES[1]
    },
    {
        id: "ahorroplus",
        consultaDatosId: 1164,
        consultaComposicionId: 'fima-ahorro-plus',
        name: "Ahorro Plus",
        tipo: TIPOS.find(tipo => tipo.id === 2),
        riesgo: RIESGOS[2],
        honorarios: {
            [CLASES[1]]: 2.1,
            [CLASES[2]]: 1.85,
            [CLASES[3]]: 1.55
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 500000,
            [CLASES[3]]: 5000000,
        },
        description: "El objetivo del fondo es maximizar el rendimiento de una cartera de bonos de corto plazo con baja volatilidad y alta liquidez. Alternativa para aquellos inversores que buscan un equilibrio de riesgo y rendimiento El patrimonio incorpora letras del BCRA (Lebac), obligaciones negociables de compañías de primera línea, fideicomisos, letras de la ciudad y provincia de Bs.As, plazo fijos, bonos nacionales cortos, entre otros.",
        shortDescription: "Letras del BCRA, Obligaciones Negociables de Compañías de primera línea, Fideicomisos, Letras de la Ciudad y Provincia de Bs.As, Plazo fijos, Bonos Nacionales cortos, entre otros.",
        currency: CURRENCIES[1]
    },
    {
        id: "rentaenpesos",
        consultaDatosId: 1113,
        consultaComposicionId: 'fima-renta-en-pesos',
        name: "Renta en Pesos",
        tipo: TIPOS.find(tipo => tipo.id === 2),
        riesgo: RIESGOS[2],
        honorarios: {
            [CLASES[1]]: 2.3,
            [CLASES[2]]: 2.05,
            [CLASES[3]]: 1.8
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 500000,
            [CLASES[3]]: 5000000,
        },
        description: "El objetivo del fondo es maximizar el rendimiento de una cartera de bonos de corto plazo con baja volatilidad y alta liquidez. Alternativa para aquellos inversores que buscan un equilibrio de riesgo y rendimiento El patrimonio incorpora letras del BCRA (Lebac), obligaciones negociables de compañías de primera línea, fideicomisos, letras de la ciudad y provincia de Bs.As, plazo fijos, bonos nacionales cortos, entre otros.",
        shortDescription: "Títulos públicos y privados de corto plazo, con una vida promedio de 1 año aproximadamente.",
        currency: CURRENCIES[1]
    },
    {
        id: "rentaplus",
        consultaDatosId: 1156,
        consultaComposicionId: 'fima-renta-plus',
        name: "Renta Plus",
        tipo: TIPOS.find(tipo => tipo.id === 2),
        riesgo: RIESGOS[2],
        honorarios: {
            [CLASES[1]]: 2.3,
            [CLASES[2]]: 2.05,
            [CLASES[3]]: 1.8
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 500000,
            [CLASES[3]]: 5000000,
        },
        description: "El objetivo del fondo es maximizar el rendimiento de una cartera de activos de renta fija en pesos de mediano plazo. El patrimonio incluye valores negociables e instrumentos de renta fija públicos y privados de mediano plazo en pesos.",
        shortDescription: "Títulos públicos y privados de mediano y largo plazo conforman principalmente la cartera de este fondo. Horizonte de inversión recomendado no menor a tres años.",
        currency: CURRENCIES[1]
    },
    {
        id: "capitalplus",
        consultaDatosId: 1175,
        consultaComposicionId: 'fima-capital-plus',
        name: "Capital Plus",
        tipo: TIPOS.find(tipo => tipo.id === 2),
        riesgo: RIESGOS[2],
        honorarios: {
            [CLASES[1]]: 2.3,
            [CLASES[2]]: 2.05,
            [CLASES[3]]: 1.8
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 500000,
            [CLASES[3]]: 5000000,
        },
        description: "El nuevo objetivo del fondo es obtener una renta real positiva frente a la inflación en el largo plazo, con una estrategia de volatilidad moderada. Invertirá principalmente en activos que ajusten por índice CER, el cual indica la variación en el índice de precios al consumidor.",
        shortDescription: "Invertirá principalmente en activos que ajusten por índice CER, el cual indica la variación en el índice de precios al consumidor.",
        currency: CURRENCIES[1]
    },
    {
        id: "rentadolaresi",
        consultaDatosId: 1679,
        consultaComposicionId: 'fima-renta-dolares-i',
        name: "Renta Dólares I",
        tipo: TIPOS.find(tipo => tipo.id === 2),
        riesgo: RIESGOS[2],
        honorarios: {
            [CLASES[1]]: .8,
            [CLASES[2]]: .7,
            [CLASES[3]]: .55
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 500000,
            [CLASES[3]]: 5000000,
        },
        description: "Obtener rentabilidad en el corto plazo de una cartera de bonos en dólares. Brinda liquidez en 48 horas y requiere una inversión inicial de tan sólo USD100. Las suscripciones y rescates se realizan en dólares desde una cuenta de la misma moneda.",
        shortDescription: "El fondo buscará obtener rentabilidad en el corto plazo de una cartera de inversiones en dólares dirigida a cliente minorista principalmente.",
        currency: CURRENCIES[2]
    },
    {
        id: "rentadolaresii",
        consultaDatosId: 1725,
        consultaComposicionId: 'fima-renta-dolares-ii',
        name: "Renta Dólares II",
        tipo: TIPOS.find(tipo => tipo.id === 2),
        riesgo: RIESGOS[2],
        honorarios: {
            [CLASES[1]]: .8,
            [CLASES[2]]: .7,
            [CLASES[3]]: .55
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 500000,
            [CLASES[3]]: 5000000,
        },
        description: "Esta opción busca obtener rentabilidad en el mediano plazo de una cartera de bonos en dólares. Brinda liquidez en 48 horas y requiere una inversión inicial de tan sólo USD100. Las suscripciones y rescates se realizan en dólares desde una cuenta de la misma moneda.",
        shortDescription: "Obtener rentabilidad en el mediano plazo de una cartera de bonos en dólares. Brinda liquidez en 48 horas y requiere una inversión inicial de tan sólo USD100.",
        currency: CURRENCIES[2]
    },
    {
        id: "acciones",
        consultaDatosId: 1112,
        consultaComposicionId: 'fima-acciones',
        name: "Acciones",
        tipo: TIPOS.find(tipo => tipo.id === 3),
        riesgo: RIESGOS[4],
        honorarios: {
            [CLASES[1]]: 3.7,
            [CLASES[2]]: 2.05
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 5000000
        },
        description: "El objetivo del fondo es la apreciación del capital a largo plazo, invirtiendo en compañías argentinas integrantes del panel Merval Argentina. La política de inversión desarrollada respecto del índice de referencia (Merval Argentina), está basada en una baja rotación de activos, diversificación del riesgo y selección de acciones con buena performance en sus indicadores.",
        shortDescription: "Acciones del panel Merval Argentina.",
        currency: CURRENCIES[1]
    },
    {
        id: "pbacciones",
        consultaDatosId: 1115,
        consultaComposicionId: 'fima-pb-acciones',
        name: "PB Acciones",
        tipo: TIPOS.find(tipo => tipo.id === 3),
        riesgo: RIESGOS[4],
        honorarios: {
            [CLASES[1]]: 3.7,
            [CLASES[2]]: 2.05
        },
        inversionMinima: {
            [CLASES[1]]: 100,
            [CLASES[2]]: 5000000
        },
        description: "El objetivo del fondo es la apreciación del capital a largo plazo, invirtiendo en compañías argentinas integrantes del panel Merval (Bolsa de Comercio de Buenos Aires). La política de inversión desarrollada respecto del índice de referencia (Merval), está basada en una baja rotación de activos, diversificación del riesgo y selección de acciones con buena performance en sus indicadores.",
        shortDescription: "Acciones del panel Merval de la Bolsa de Comercio de Buenos Aires con una inversión mínima requerida de cien pesos.",
        currency: CURRENCIES[1]
    }
]

module.exports = {
    FONDOS_DATA,
    TIPOS
};