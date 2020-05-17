const axios = require('axios')

let key = ``
let token = ``

let getBoards = `https://api.trello.com/1/members/me/boards?fields=name,url&key=${key}&token=${token}`
let getBoard = `https://api.trello.com/1/boards/5ec00c55eeb2be27d353d562?url&key=${key}&token=${token}`
let getCards = `https://api.trello.com/1/boards/5ec00c55eeb2be27d353d562/?cards=all&key=${key}&token=${token}`
let getCardItems = ``

function makeTable (todoItems) {
  if (todoItems.length > 0) {
    todoItems.forEach(todo => {
      let div = document.createElement("div");
      document.getElementById("todoList").appendChild(div);
      div.innerHTML += `
        <table class="todo">
          <td class="first-td">
            <input type="checkbox" class="checkbox" />
          </td>
          <td class="second-td">
            ${todo.name}
          </td>
        </table>
      `
    })
  } else {    
    let div = document.createElement("div");
    document.getElementById("todoList").appendChild(div);
    div.innerHTML += `Looks like you're free today!`
  }
}

axios.get(getCards)
  .then(function (response) {
    makeTable(response.data.cards)
  })
  .catch(function (error) {
    console.log(error);
  })
