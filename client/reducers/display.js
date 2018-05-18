import {SHOW_GAME} from '../actions'

const initialState = {
  landing: true,
  game: false
}

function display (state = initialState, action) {
  switch (action.type) {
    case (SHOW_GAME): {
      return {
        landing: false,
        game: true
      }
    }
    default: {
      return state
    }
  }
}

export default display
