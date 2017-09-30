'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#status-message').text('You have successfully signed up!')
  $('#sign-up').hide()
  $('#game-board').hide()
}

const signUpFailure = function () {
  $('#status-message').text('Sign-Up Failed!')
}

const signInSuccess = function (response) {
  $('#status-message').text('Signed in successfully')
  store.user = response.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#new-game').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#game-board').hide()
  $('#game-history').show()
  $('.nppi').val('')
}

const signInFailure = function () {
  $('#status-message').text('Login Failed')
  $('.nppi').val('')
}

const changePasswordSuccess = function () {
  $('#status-message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#status-message').text('Password Change Failed. Please try again.')
}

const signOutSuccess = function () {
  $('#status-message').text('Signed out successfully')
  store.user = null
  $('#game-board').hide()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#game-history').hide()
  $('#game-stats-message').text('')
}

const signOutFailure = function () {
  $('#status-message').text('Logout Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
