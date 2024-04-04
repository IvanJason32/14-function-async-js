async function obtenerDatosPais(nombre) {
    const respuesta = await solicitarDatos(`https://restcountries.com/v3.1/name/${nombre}`);
    const datos = await parsearRespuestaJson(respuesta);
    const country = extraerPrimerPais(datos);
    return {
        nombre: country.name.common,
        moneda: obtenerNombreMoneda(country),
        coordenadas: country.latlng
    };
}

async function solicitarDatos(url) {
    return await fetch(url);
}

async function parsearRespuestaJson(respuesta) {
    return await respuesta.json();
}

function extraerPrimerPais(datos) {
    return datos[0];
}

function obtenerNombreMoneda(country) {
    return Object.values(country.currencies)[0].name;
}

obtenerDatosPais('Colombia').then(console.log);