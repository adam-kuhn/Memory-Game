import React from 'react'

import Game from './Game'
import Counter from './Counter'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
    this.handleScore = this.handleScore.bind(this)
  }
  handleScore (newGame) {
    let count = this.state.count + 1
    if (newGame) {
      count = 0
    }
    this.setState({
      count
    })
  }
  render () {
    return (
      <div>
        <h2>Memory Game</h2>
        <Counter count={this.state.count}/>
        <Game handleScore={this.handleScore}/>
      </div>
    )
  }
}

export default App
