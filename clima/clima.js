const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=55f062fd43b21a5e55665cb4da953502&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}