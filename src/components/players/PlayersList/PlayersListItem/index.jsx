import React from 'react'
import './index.css'

export default ({ player }) =>
  <div className="players-list-item">
    <h4>{player.firstname} {player.lastname}</h4>
    <h6 className="h6 text-muted small">{player.shortname}</h6>
    <img
      className="img-fluid mt-3" src={player.picture}
      alt={`picture of ${player.firstname} ${player.lastname}`}
    />
  </div>
