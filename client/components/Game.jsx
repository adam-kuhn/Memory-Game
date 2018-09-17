import React from 'react'

import StartGame from './StartGame'

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      gameboard: [],
      clickCount: 0,
      valueToMatch: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.startGame = this.startGame.bind(this)
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

  startGame (board) {
    this.setState({
      gameboard: board,
      clickCount: 0,
      valueToMatch: 0
    })
  }

  render () {
    return (
      <div>
        <StartGame startGame={this.startGame}/>
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
