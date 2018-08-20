import { combineReducers } from 'redux'

import errors from './errors'
import players from './players'

export default combineReducers({
  errors,
  players
})
