const moment = require('moment')

 moment().format('HH:mm:ss a')

let renderTime = function() {
  document.getElementById('time-container').innerHTML = `
  <span class="hour">${moment().format('HH')}</span>
  <span class="minute"> : ${moment().format('mm')}</span>
  <span class="second"> : ${moment().format('ss')}</span>
  <span class="am-pm">${moment().format('a')}</span>
  <br />
  <span class="day">${moment().format('dddd')}, </span>
  <span class="date">${moment().format('MMM Do YYYY')}</span>
  `
}

setInterval(renderTime, 1000)
// renderTime()