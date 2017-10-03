const gameWon = function (player) {
  $('#status-message').text(player + ' won the game!!!!')
  $('.cell').off()
}
const gameDraw = function () {
  $('#status-message').text('It\'s a draw. Click "New Game" to try again!')
}

const createGameFailure = function () {
  $('#status-message').text('Game load was unsuccessful. Please try again.')
}

const displayStats = function (data) {
  $('#game-stats-message').text('You have played ' + data.games.length + ' games')
}

module.exports = {
  gameWon,
  gameDraw,
  createGameFailure,
  displayStats
}
