import axios from 'axios'

import { errorOccured } from '..'
import { SAVE_PLAYERS } from '../../actions'

export const getPlayers = () => async dispatch => {
  try {
    const { data } = await axios.get(`${process.env.API_BASE_URL}/cf1588cd80fed41661adecb2e3ca9704/raw/8df6831c33c1b0c178a533e8953a61d11434f220/headtohead.json`)

    dispatch(savePlayers({
      players: data.players
    }))
  } catch (err) {
    console.error(err)
    dispatch(errorOccured(err))
  }
}

export const savePlayers = payload => ({
  type: SAVE_PLAYERS,
  payload
})
