// const gameEventRules = require('./events')

const gameWon = function (player) {
  $('#status-message').text(player + ' won')
  $('.cell').off()
}
const gameDraw = function () {
  $('#status-message').text('It\'s a draw')
}
const createGame = function ()

module.exports = {
  gameWon,
  gameDraw
}
