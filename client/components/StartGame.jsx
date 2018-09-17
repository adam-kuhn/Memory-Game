import React from 'react'
import _ from 'lodash'

import gameboard from '../lib/gameboard'

class StartGame extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    for (let card of gameboard) {
      card.visible = false
      card.matched = false
    }
    const randomizedBoard = _.shuffle(gameboard)
    this.props.startGame(randomizedBoard)
  }
  render () {
    return (
      <div>
        <button type='button' onClick={this.handleClick}>Start Game</button>
      </div>
    )
  }
}

export default StartGame
