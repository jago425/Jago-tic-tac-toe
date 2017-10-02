'use strict'
const api = require('./api')
const ui = require('./ui')
const gameLogic = require('./game-logic')
const store = require('../store')
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
    api.updateGame(event.target.id, player, false)
    if (gameLogic.checkWin(gameBoard)) {
      api.updateGame(event.target.id, player, true)
      ui.gameWon(player)
    } else if (turns === 9) {
      api.updateGame(event.target.id, player, true)
      ui.gameDraw()
    } else {
      turns++
      player = (turns % 2) === 1 ? 'X' : 'O'
    }
  }
}
// createGame function to generate a new board when the "New Game" button is clicked
// call out to the API to get the game object
// store the response
// show the game-board
// make sure board is enabled
// empty the game-board(HTML)
// set the gameBoard array to empty strings
const createGame = function () {
  api.newGame()
    .then(function (response) {
      store.game = response.game
    })
    .catch(ui.createGameFailure)
  $('#game-board').show()
  $('#game-stats-message').text('')
  $('.cell').on('click', eventHandler)
  $('.cell').text('')
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = ''
  }
  player = 'X'
  turns = 1
  $('#status-message').text('')
}

const retrieveGames = function () {
  api.retrieveGame()
    .then(ui.displayStats)
}

module.exports = {
  gameBoard,
  eventHandler,
  createGame,
  retrieveGames
}
