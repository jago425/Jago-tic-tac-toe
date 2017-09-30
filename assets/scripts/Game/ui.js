const gameWon = function (player) {
  $('#status-message').text(player + ' won')
  $('.cell').off()
}
const gameDraw = function () {
  $('#status-message').text('It\'s a draw')
}

const createGameFailure = function () {
  $('#status-message').text('Game load was unsuccessful. Please try again.')
}

const displayStats = function (data) {
  console.log(data)
  $('#game-stats-message').text('You have played ' + data.games.length + ' games')
}

module.exports = {
  gameWon,
  gameDraw,
  createGameFailure,
  displayStats
}
