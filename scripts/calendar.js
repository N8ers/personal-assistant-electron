const axios = require('axios');
const moment = require('moment')

let CLIENT_ID = '452597098857-mdep05i3si61cgbqv210ti253pld6p1o.apps.googleusercontent.com';
let API_KEY = 'Q3sk61C_BKtEWwg0RTGlcq3Z';

let optionalArgs = {
  timeMin: (new Date()).toISOString(),
  showDeleted: false,
  singleEvents: true,
  maxResults: 10,
  orderBy: 'startTime'
};

function makeTable (data) {
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
}

async function getCalendar(_, optionalArgs) {
  const PUBLIC_KEY = 'AIzaSyA3Vj8opTojQsgHvRR7WuugqdTUDb8xJsI',
  CALENDAR_ID = '983grotkd897333tqiuq4hj8t0@group.calendar.google.com';
  const dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
  CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

  return fetch(dataUrl, optionalArgs).then(
    (response) => response.json()
  ).then((data) => makeTable(data.items));
}

getCalendar();
