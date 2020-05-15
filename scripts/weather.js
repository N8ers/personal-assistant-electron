const axios = require('axios');

let key = `e20fe780791cad1d4d4d7b8484f970a5`;

async function getWeather() {
  let response = await axios.get(`https://api.darksky.net/forecast/${key}/39.6867292,-86.2898475`)
  console.log(response)
  let current = response.data.currently;
  let today = response.data.daily.data[0];
  let day2 = response.data.daily.data[1];
  let day3 = response.data.daily.data[2];
  let day4 = response.data.daily.data[3];
  let day5 = response.data.daily.data[4];
  document.getElementById("temp-template").innerHTML = `
    <div class="current-temp">${current.temperature}&deg; F</div>
    <div class="current-summary">${current.summary}</div>
    <span id="currentIcon"></span>
    <div class="comming-days">${response.data.daily.summary}</div>

    <table style="width:100%">
      <tr><th>Today</th><th>Tomorrow</th><th>Day3</th><th>Day4</th><th>Day5</th></tr>
      <tr>
        <td class="weatherbox"><span id="todayIcon"></span><div class="hi-lo">${today.temperatureHigh} | ${today.temperatureLow}</div></td>
        <td class="weatherbox"><span id="day2Icon"></span> <div class="hi-lo">${day2.temperatureHigh} | ${day2.temperatureLow}</div></td>
        <td class="weatherbox"><span id="day3Icon"></span> <div class="hi-lo">${day3.temperatureHigh} | ${day3.temperatureLow}</div></td>
        <td class="weatherbox"><span id="day4Icon"></span> <div class="hi-lo">${day4.temperatureHigh} | ${day4.temperatureLow}</div></td>
        <td class="weatherbox"><span id="day5Icon"></span> <div class="hi-lo">${day5.temperatureHigh} | ${day5.temperatureLow}</div></td>
      </tr>
    </table>
  `;

  let currentIcon = document.getElementById('currentIcon')
  let todayIcon = document.getElementById('todayIcon')
  let day2Icon = document.getElementById('day2Icon')
  let day3Icon = document.getElementById('day3Icon')
  let day4Icon = document.getElementById('day4Icon')
  let day5Icon = document.getElementById('day5Icon')
  currentIcon.innerHTML = iconLooper(current.icon)
  todayIcon.innerHTML = iconLooper(today.icon)
  day2Icon.innerHTML = iconLooper(day2.icon)
  day3Icon.innerHTML = iconLooper(day3.icon)
  day4Icon.innerHTML = iconLooper(day4.icon)
  day5Icon.innerHTML = iconLooper(day5.icon)
  

  function iconLooper(x) {
    console.log('x: ', x)
    switch (x) {
        case 'rain':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--lV_oG1pX--/v1515194565/rainy-6_pzlrlc.svg' />";
            break;
        case 'snow':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--EsqjgOhi--/v1515194606/snowy-6_zl9kwx.svg' />";
            break;
        case 'clear-day':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s---6vDoixr--/v1515194528/day_shry4k.svg' />";
            break;
        case 'clear-night':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--CxSp0zXi--/v1515194530/night_quuh8p.svg' />";
            break;
        case 'sleet':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--yeTLFcMd--/v1515194570/rainy-7_sdbkyl.svg' />";
            break;
        case 'wind':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />"
            break;
        case 'fog':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />"
            break;
        case 'cloudy':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />";
            break;
        case 'partly-cloudy-day':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--pkzBuC_i--/v1515194500/cloudy-day-1_n3vykl.svg' />";
            break;
        case 'snow':
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--DdrT7Iph--/v1515194500/cloudy-night-1_ro8fb5.svg' />";
            break;
        default:
            console.log('i dont know whats snowin on')
            iconCurrently = "<img src='https://res.cloudinary.com/raphaeladdile/image/upload/s--ivgWegRI--/v1515194500/cloudy_vqbnvk.svg' />";
      }
    return iconCurrently
  }
}

getWeather();
