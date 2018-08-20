import React from 'react'
import { connect } from 'react-redux'

import { getPlayers } from '../../store/action-creators'

import PlayersList from '../../components/players/PlayersList'

export class Players extends React.Component {
  componentDidMount() {
    this.props.getPlayers()
  }

  render() {
    if (this.props.isError) {
      return <h4>Error Occurred</h4>
    }

    return (
      <div>
        <h1 className="mb-4">Player Listings</h1>
        <PlayersList players={this.props.players} />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  isError: state.errors.isError,
  players: state.players.data
})

const mapDispatchToProps = {
  getPlayers
}

export default connect(mapStateToProps, mapDispatchToProps)(Players) 
