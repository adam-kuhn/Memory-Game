import React from 'react'

import StartGame from './StartGame'
import displayWin from '../lib/displayWin'

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      gameboard: [],
      clickCount: 0,
      valueToMatch: 0,
      gameWon: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.startGame = this.startGame.bind(this)
  }
  handleClick (e) {
    this.props.handleScore()
    const value = e.target.getAttribute('data-value')
    const {id} = e.target
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
      let cardsMatched = 0
      let gameWon = this.state.gameWon
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
        if (card.matched) {
          cardsMatched++
        }
        if (cardsMatched === gameboard.length) {
          gameWon = true
        }
      }
      this.setState({
        ...this.state,
        gameboard,
        clickCount: 0,
        valueToMatch: 0,
        gameWon
      })
    }
  }

  startGame (board) {
    this.props.handleScore(true)
    this.setState({
      gameboard: board,
      clickCount: 0,
      valueToMatch: 0,
      gameWon: false
    })
  }

  render () {
    return (
      <div className='game-container'>
        <StartGame startGame={this.startGame}/>
        <div className='game'>
          <div className='game-board'>
            {this.state.gameboard.map(box => {
              return (
                box.visible ? <img key={box.id} src={box.img} />
                  : <img key={box.id} src='/styles/images/question.png'
                    id={box.id} data-value={box.value}
                    className='hidden' onClick={this.handleClick}/>
              )
            })}
          </div>
          {this.state.gameWon && displayWin(this.props.count)}
        </div>
      </div>
    )
  }
}

export default Game
