const axios = require('axios');

let key = `e20fe780791cad1d4d4d7b8484f970a5`;

async function getWeather() {
  let res = await axios.get(`https://api.darksky.net/forecast/${key}/39.6867292,-86.2898475`)
  console.log('res: ', res);
  document.getElementById("currentTemp").innerHTML = `${res.data.currently.temperature} deg`;
}

getWeather();