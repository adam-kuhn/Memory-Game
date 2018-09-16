import React from 'react'
import _ from 'lodash'

import gameboard from '../lib/gameboard'

_.shuffle(gameboard)

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      gameboard,
      clickCount: 0,
      valueToMatch: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const randomizedBoard = _.shuffle(this.state.gameboard)
    this.setState({
      gameboard: randomizedBoard
    })
  }
  handleClick (e) {
    const {id, value} = e.target
    const currentClick = this.state.clickCount + 1
    let gameboard = this.state.gameboard
    if (currentClick === 1) {
      for (let card of gameboard) {
        if (!card.matched) {
          card.visible = false
        }
        if (card.id === Number(id)) {
          card.visible = true
        }
      }
      this.setState({
        ...this.state,
        gameboard,
        clickCount: currentClick,
        valueToMatch: value
      })
    } else {
      for (let card of gameboard) {
        if (card.id === Number(id)) {
          card.visible = true
        }
        if (value === this.state.valueToMatch) {
          for (let card of gameboard) {
            if (card.visible) {
              card.matched = true
            }
          }
        }
      }
      this.setState({
        ...this.state,
        gameboard,
        clickCount: 0,
        valueToMatch: 0
      })
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
                className='visible' onClick={this.handleClick}
                disabled={true}>
                Value: {box.value}
              </button>
            )
          }
          return (
            <button key={box.id} id={box.id} value={box.value}
              className='hidden' onClick={this.handleClick}>
              Placeholder
            </button>
          )
        })}
      </div>
    )
  }
}

export default Game
