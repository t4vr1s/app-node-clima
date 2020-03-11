const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/* lugar.getLugarLatLon(argv.direction)
    .then(resp => {
        console.log(resp);
    }) 

clima.getClima(-37.470001, -72.349998)
    .then(console.log)
    .catch(console.log);*/

clima.getClima(-33.459999, -70.639999)
    .then(console.log)
    .catch(console.log);

const getInfo = async (direction) => {

    try {
        const coords = await lugar.getLugarLatLon(direction);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `el clima de ${direction} es de ${temp}.`;
    } catch (error) {
        return `no se pudo determinar el clima de ${direction}`;
    }
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);