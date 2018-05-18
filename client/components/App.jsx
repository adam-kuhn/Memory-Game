import React from 'react'
import {connect} from 'react-redux'

import Landing from './Landing'
import Game from './Game'

class App extends React.Component {
  render () {
    return (
      <div>
        <h2>React and Redux development is ready to GOOOO!</h2>
        {this.props.showLanding && <Landing />}
        {this.props.showGame && <Game />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showLanding: state.display.landing,
    showGame: state.display.game
  }
}

export default connect(mapStateToProps)(App)
