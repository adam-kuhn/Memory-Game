import React from 'react'

import gameboard from '../lib/gameboard'

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      gameboard
    }
  }
  render () {
    return (
      <div>
        <h3>This will be a game </h3>
        {this.state.gameboard.map(box => {
          if (box.visible) {
            return (
              <button key={box.id} id={box.id} value={box.value}
                className='visible'>
                Value: {box.value}
              </button>
            )
          }
          return (
            <button key={box.id} id={box.id} value={box.value}
              className='hidden'>
              Placeholder
            </button>
          )
        })}
      </div>
    )
  }
}

export default Game
