const axios = require('axios');
const moment = require('moment')

let now = (new Date()).toISOString()
console.log('now: ', now)

let eod = (new Date()).setHours(23,59,59)
console.log('eod: ', eod)

let newEOD = new Date(eod).toISOString()
console.log('newEOD: ', newEOD)

let optionalArgs = {
  timeMin: (new Date()).toISOString(),
  timeMax: newEOD,
  showDeleted: false,
  singleEvents: true,
  // maxResults: 2,
  orderBy: 'startTime'
};

function makeTable (data) {
  if (data.length > 0) {
    console.log('if block fired')
    data.forEach(event => {
      let div = document.createElement("div");
      document.getElementById("calendarEvents").appendChild(div);
      div.innerHTML += `
        <table class="event">
          <td class="first-td">
            ${moment(event.start.dateTime).format('h:mm a')}
            </br>
            ${moment(event.end.dateTime).format('h:mm a')}
          </td>
          <td class="second-td">${event.summary}</td>
        </table>
      `
    })
  } else {    
    console.log('else block fired')
    let div = document.createElement("div");
    document.getElementById("calendarEvents").appendChild(div);
    div.innerHTML += `Looks like you're free today!`
  }
}

async function getCalendar(optArgs) {
  const publicKey = 'AIzaSyA3Vj8opTojQsgHvRR7WuugqdTUDb8xJsI',
  calendarId = '983grotkd897333tqiuq4hj8t0@group.calendar.google.com';
  const dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
  calendarId, '/events?key=', publicKey].join('');

  let getEvents = await axios.get(dataUrl, {
    params: optionalArgs
  })

  makeTable(getEvents.data.items)
}

getCalendar();