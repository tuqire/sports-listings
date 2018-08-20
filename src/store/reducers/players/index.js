import * as ACTIONS from '../../actions'

export const defaultState = {
  data: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_PLAYERS:
      return {
        data: action.payload.players
      }

    default:
      return state
  }
}
