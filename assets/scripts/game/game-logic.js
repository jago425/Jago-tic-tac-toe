// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')
// const gameEvents = require('./events')

//  if the values of the indices in each statement aren't blank and are equal to each other, then return true
const checkWin = function (gameBoard) {
  if (gameBoard[0] && ((gameBoard[0] === gameBoard[1]) && (gameBoard[0] === gameBoard[2]))) {
    return true
  } else if (gameBoard[3] && ((gameBoard[3] === gameBoard[4]) && (gameBoard[3] === gameBoard[5]))) {
    return true
  } else if (gameBoard[6] && ((gameBoard[6] === gameBoard[7]) && (gameBoard[6] === gameBoard[8]))) {
    return true
  } else if (gameBoard[0] && ((gameBoard[0] === gameBoard[3]) && (gameBoard[0] === gameBoard[6]))) {
    return true
  } else if (gameBoard[1] && ((gameBoard[1] === gameBoard[4]) && (gameBoard[1] === gameBoard[7]))) {
    return true
  } else if (gameBoard[2] && ((gameBoard[2] === gameBoard[5]) && (gameBoard[2] === gameBoard[8]))) {
    return true
  } else if (gameBoard[0] && ((gameBoard[0] === gameBoard[4]) && (gameBoard[0] === gameBoard[8]))) {
    return true
  } else if (gameBoard[2] && ((gameBoard[2] === gameBoard[4]) && (gameBoard[2] === gameBoard[6]))) {
    return true
  } else {
    return false
  }
}

module.exports = {
  checkWin
}
