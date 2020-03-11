const axios = require('axios');

const getLugarLatLon = async (direction) => {
    const encodeUrl = encodeURI(direction);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '472c9793b1msh3997367f0deacffp1e0c31jsn878d86155edd' }
    });
    const respLugar = await instance.get();
    if (respLugar.data.Results.length === 0) {
        throw new Error(`no se pudo localizar la dirección ${direction}`);
    }
    const data = respLugar.data.Results[0];
    let dir = data.name;
    let lat = data.lat;
    let lon = data.lon;
    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}