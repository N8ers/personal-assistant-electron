const axios = require('axios');

let key = `e20fe780791cad1d4d4d7b8484f970a5`;

async function getWeather() {
  let response = await axios.get(`https://api.darksky.net/forecast/${key}/39.6867292,-86.2898475`)
  let current = response.data.currently;
  let today = response.data.daily.data[0];
  let day2 = response.data.daily.data[1];
  let day3 = response.data.daily.data[2];
  let day4 = response.data.daily.data[3];
  let day5 = response.data.daily.data[4];
  document.getElementById("temp-template").innerHTML = `
    <h1>${current.temperature} deg</h1>
    <span>${current.summary}</span>
    <span></span>

    <table style="width:100%">
      <tr><th>Today</th><th>Tomorrow</th><th>Day3</th><th>Day4</th><th>Day5</th></tr>
      <tr>
        <td><span>${today.icon}</span><br/><span>${today.temperatureHigh}</span> | <span>${today.temperatureLow}</span></td>
        <td><span>${day2.icon}</span><br/><span>${day2.temperatureHigh}</span> | <span>${day2.temperatureLow}</span></td>
        <td><span>${day3.icon}</span><br/><span>${day3.temperatureHigh}</span> | <span>${day3.temperatureLow}</span></td>
        <td><span>${day4.icon}</span><br/><span>${day4.temperatureHigh}</span> | <span>${day4.temperatureLow}</span></td>
        <td><span>${day5.icon}</span><br/><span>${day5.temperatureHigh}</span> | <span>${day5.temperatureLow}</span></td>
      </tr>
    </table>
  `;
}

getWeather();
