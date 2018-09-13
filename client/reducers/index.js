import {combineReducers} from 'redux'

import display from './display'
import game from './game'

export default combineReducers({
  display,
  game
})
