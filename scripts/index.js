const moment = require('moment')

 moment().format('HH:mm:ss a')

let renderTime = function() {
  document.getElementById('time-container').innerHTML = `
  <h2 id="time">${moment().format('HH:mm:ss a')}</h2>
  <h3 class="date">${moment().format('dddd, MMM Do YYYY')}</h3>
  `
}

setInterval(renderTime, 1000)