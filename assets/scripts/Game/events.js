'use strict'
const ui = require('./ui')
const gameLogic = require('./game-logic')
const gameBoard = ['', '', '', '', '', '', '', '', '']
let turns = 1
let player = 'X'

// function to be able to click into a cell to enter a value and assign that value to the respective index in the array
// look for the HTML id that matches the one you're targeting with an event.  then update the value of that id with whatever the value is of the player variable
// assign the value of whatever player is to the index of the gameBoard array that matches the id of the HTML element you're targeting
// call the checkWin function to see if anyone has won
// if someone has won,
// when turns is odd, player is 'X', when turns is even, player is 'O'
// increment turns each time
const eventHandler = function (event) {
  if (!gameBoard[event.target.id]) {
    $('#' + event.target.id).text(player)
    gameBoard[event.target.id] = player
    if (gameLogic.checkWin(gameBoard)) {
      ui.gameWon(player)
      console.log(gameLogic.checkWin(gameBoard))
    } else if (turns === 9) {
      ui.gameDraw()
    } else {
      turns++
      player = (turns % 2) === 1 ? 'X' : 'O'
    }
  }
}



module.exports = {
  gameBoard,
  eventHandler
}
