const axios = require('axios');

let key = `bqrcr17rh5rabvm5qoog`;

function makeTable(data) {
  data.forEach(story => {
    console.log(story.headline)
    let li = document.createElement("li");
    document.getElementById("stockNews").appendChild(li)
    li.innerHTML += story.headline
  })
}

async function getMarketNews() {
  // let res = await axios.get(`https://finnhub.io/api/v1/stock/symbol=SPY?exchange=US&token=${key}`)
  let res = await axios.get(`https://finnhub.io/api/v1/news?category=general&token=${key}`)
  makeTable(res.data)
}

getMarketNews();