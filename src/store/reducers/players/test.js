import * as ACTIONS from '../../actions'
import reducer, { defaultState } from './index'

describe('store/reducers/players', () => {
  describe('if no state set', () => {
    it('returns default state', () => {
      const state = reducer(undefined, {})
  
      expect(state).toEqual(defaultState)
    })
  })

  describe('if unrecognised action', () => {
    it('returns old state', () => {
      const state = reducer('foo', {
        type: 'FOO_ACTION'
      })
  
      expect(state).toEqual('foo')
    })
  })

  describe('if `SAVE_PLAYERS` action', () => {
    it('returns mapped listings', () => {
      const state = reducer({}, {
        type: ACTIONS.SAVE_PLAYERS,
        payload: {
          players: [{
            id: 'foo',
            name: 'action'
          }, {
            id: 'bar',
            name: 'adventure'
          }]
        }
      })
  
      expect(state.data).toEqual([{
        id: 'foo',
        name: 'action'
      }, {
        id: 'bar',
        name: 'adventure'
      }])
    })
  })
})
