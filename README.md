# FIMA Api

> Los fondos comunes de inversión son productos que permiten una efectiva administración de sus inversiones de manera simple. Invierten - de acuerdo a su objetivo- en distintos tipos de activos tales como acciones, bonos públicos y privados, fideicomisos financieros y certificados a plazo fijo, entre otros.

Esta API permite traer datos de fondos FIMA.  
Entrega por un lado, datos estáticos con informacion sobre los fondos y por otro, datos como el rendimiento acumulado entre dos fechas consultadas y la composición del fondo.  

## Endpoints

### Datos estáticos
Todos los fondos:  
  `${URL}/api/v1/static/fondos`  
  
Datos de fondo específico:  
`${URL}/api/v1/static/fondo/${fondo.id}`

Todos los tipos de fondo:  
  `${URL}/api/v1/static/tipos`
  
Datos de tipo específico:  
`${URL}/api/v1/static/tipo/${tipo.slug}`


## Instalación

    npm i

## Inicializar

    node index.js