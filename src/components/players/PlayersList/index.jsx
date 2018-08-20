import React from 'react'
import PlayersListItem from './PlayersListItem'

export default props =>
  <div className="row">
    {props.players.map(player =>
      <div key={player.shortname} className="col-6 col-md-4 col-lg-3 mt-5 mb-3">
        <PlayersListItem player={player} />
      </div>
    )}
  </div>
