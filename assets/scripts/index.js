'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./authentication/events')
const gameEvents = require('./game/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.onPageLoad()
})

$(() => {
  authEvents.addHandlers()
})

$(() => {
  $('.cell').on('click', gameEvents.eventHandler) // whenever you make a click on an element with the class of cell, run the makeAGame function in the gameEvents variable which is the path to the file where the makeAGame function lives
})

// $(() => {
//   const gameCell = function () {
//     console.log($(this).attr('id'))
//   }
//   $('.cell').on('click', gameCell)
// })

// $(() => {
//   gameEvents.addGameHandlers()
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
