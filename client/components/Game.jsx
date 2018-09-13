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
          return (
            <button key={box.id} id={box.id} value={box.value}>
          Value: {box.value}</button>
          )
        })}
      </div>
    )
  }
}

export default Game
