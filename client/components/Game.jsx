import React from 'react'
import {connect} from 'react-redux'

function Game (props) {
  return (
    <div>
      <h3>This will be a game </h3>
      {props.game.map(box => {
        return (
          <button key={box.id} id={box.id} value={box.value}>
        Value: {box.value}</button>
        )
      })}
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    game: state.game.game
  }
}

export default connect(mapStateToProps)(Game)
