import React from 'react'
import {connect} from 'react-redux'

import {startGame} from '../actions'

class Landing extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(startGame())
  }
  render () {
    return (
      <div>
        <h1>Memory Game </h1>
        <button type='button' onClick={this.handleClick}>Start Game</button>
      </div>
    )
  }
}

export default connect()(Landing)
