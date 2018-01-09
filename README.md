# FIMA Api

> Los fondos comunes de inversión son productos que permiten una efectiva administración de sus inversiones de manera simple. Invierten - de acuerdo a su objetivo- en distintos tipos de activos tales como acciones, bonos públicos y privados, fideicomisos financieros y certificados a plazo fijo, entre otros.

Esta API permite traer datos de fondos FIMA.  
Entrega por un lado, datos estáticos con informacion sobre los fondos y por otro, datos como el rendimiento acumulado entre dos fechas consultadas y la composición del fondo.  

## Endpoints

### Datos estáticos
__Todos los fondos:__  
  `${URL}/api/v1/static/fondos`  
  
__Datos de fondo específico:__  
`${URL}/api/v1/static/fondo/${fondo.id}`

__Todos los tipos de fondo:__  
  `${URL}/api/v1/static/tipos`
  
__Datos de tipo específico:__  
`${URL}/api/v1/static/tipo/${tipo.slug}`

### Datos históricos  
__Composicion de un fondo:__

`${URL}/api/v1/data/${fondo.id}/composicion`  

Respuesta de ej:  
  
`https://fima-api.now.sh/api/v1/data/acciones/composicion`

```
[{
  label: "SERVICIOS",
  value: "31.61"
},
{
  label: "BANCOS",
  value: "22.21"
} ...]
```
  
__Rendimiento acumulado de un fondo:__  

Recibe 3 parámetros _opcionales_:
- Fecha de inicio (en formato YYYYMMDD).
- Fecha final (en formato YYYYMMDD).
- Cantidad de dinero (Float o integer).  
De no recibir ningun parámetro, devuelve el rendimiento en el último año sin ninguna cantidad de dinero.  

`${URL}/api/v1/data/${fondo.id}/rendimiento/${fechaInicio}/${fechaFin}/${moneyQty}`

Respuesta de ej:  
  
`https://fima-api.now.sh/api/v1/data/acciones/rendimiento/20170707/20170710/1000`

```
[{
  date: "07/07/2017",
  value: 0,  // % de rendimiento acumulado
  earned: 0, // $ ganado
  total: 1000 // $ total acumulado
}, ...]
```

Los últimos dos items solo aparecen cuando existe el parametro de dinero.

## Instalación

    npm i

## Inicializar

    node index.js