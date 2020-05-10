const moment = require('moment')

let renderTime = function() {
  document.getElementById('time-container').innerHTML = `
  <span class="hour">${moment().format('h')}</span>
  <span class="minute"> : ${moment().format('mm')}</span>
  <span class="second"> : ${moment().format('ss')}</span>
  <span class="am-pm">${moment().format('a')}</span>
  <br />
  <span class="day">${moment().format('dddd')}, </span>
  <span class="date">${moment().format('MMM Do YYYY')}</span>
  `
}

setInterval(renderTime, 1000)