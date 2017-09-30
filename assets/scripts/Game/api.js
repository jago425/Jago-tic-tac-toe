const config = require('../config')
const store = require('../store')

// request to send in data to get back data from the 'games' file in the api
// using the URL from the config file and adding the games file to the extention
// don't know what headers are
// need to send in token in order for API to complete the request
const newGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (gameBoardCell, player, finished) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': gameBoardCell,
          'value': player
        },
        'over': finished
      }
    }
  })
}
const retrieveGame = function (gameBoardCell, player, finished) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  updateGame,
  retrieveGame
}
