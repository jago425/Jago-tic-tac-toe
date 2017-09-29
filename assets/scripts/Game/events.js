'use strict'

const gameBoard = ['', '', '', '', '', '', '', '', '']
let turns = 1
let player = 'X'

const makeAGame = function (event) { // function to be able to click into a cell to enter a value and assign that value to the respective index in the array
  if (!gameBoard[event.target.id]) {
    $('#' + event.target.id).text(player) // look for the HTML id that matches the one you're targeting with an event.  then update the value of that id with whatever the value is of the player variable
    gameBoard[event.target.id] = player // assign the value of whatever player is to the index of the gameBoard array that matches the id of the HTML element you're targeting
    turns++
    player = (turns % 2) === 1 ? 'X' : 'O'
  }
  console.log(turns)
  console.log(player)
}

// $(() => {
//   $('.cell').click(function () {
//     const cell = $(this)
//     const isCellTaken = function (cell) { // create new function to determine if the cell already has a value in it
//       if (!isCellTaken) { // if the cell is not taken then set it
//         let player = currentTurn(turn)
//         if ((turn % 2) === 1) {
//           cell.html('X')
//         } else {
//           cell.html('O')
//         }
//       }
//       let marker = getPieceForCurrentPlayer (player) // create a function that gets the piece for the current player, returns either X or O
//       const updateCell = function (cell, marker) { // create a function that applies the marker to the cell, cell.html(pattern)
//       }
//     }
//   })
//   turn = turn++ // increment the turn after this whole function runs
// })
module.exports = {
  makeAGame
}
