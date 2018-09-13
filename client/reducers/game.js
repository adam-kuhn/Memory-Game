const initialState = {
  game: [{
    id: 1,
    value: 1,
    visible: false,
    matched: false
  },
  {
    id: 2,
    value: 1,
    visible: false,
    matched: false
  },
  {
    id: 3,
    value: 2,
    visible: false,
    matched: false
  },
  {
    id: 4,
    value: 2,
    visible: false,
    matched: false
  }]
}

const game = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default game
