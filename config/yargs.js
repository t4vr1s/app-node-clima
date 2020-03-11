const argv = require('yargs').options({
    direction: {
        demand: true,
        alias: 'd',
        desc: 'Ver el clima de la ciudad ingresada'
    }
}).argv;

module.exports = {
    argv
}