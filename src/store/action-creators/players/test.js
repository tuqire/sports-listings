import axios from 'axios'

import * as actionCreators from '..'
import { SAVE_PLAYERS } from '../../actions'

import { getPlayers, savePlayers } from './index'

jest.mock('axios', () => ({
  get: jest.fn(() => ({
    data: {
      players: [
        { bar: 'bar', foo: 'foo', foo_bar: 'foo' },
        { bar: 'bar' }
      ]
    }
  }))
}))

jest.mock('../index', () => ({
  errorOccured: jest.fn((() => 'errorOccured'))
}))

describe('store/action-creators/players', () => {
  let dispatchMock

  beforeEach(() => {
    dispatchMock = jest.fn()
    console.error = jest.fn()
  })

  describe('#getPlayers', () => {
    it('tries to fetch players from api', () => {
      getPlayers({ pageNum: 5 })(dispatchMock)
      expect(axios.get).toHaveBeenCalledWith(`${process.env.API_BASE_URL}/cf1588cd80fed41661adecb2e3ca9704/raw/8df6831c33c1b0c178a533e8953a61d11434f220/headtohead.json`)
    })

    describe('on success', () => {
      beforeEach(async () => {
        await getPlayers()(dispatchMock)
      })

      it('doesnt dispatch `errorOccured` action', () => {
        expect(actionCreators.errorOccured).not.toHaveBeenCalled()
      })
  
      it('dispatches `savePlayers` action with returned players', () => {
        expect(dispatchMock).toHaveBeenCalledWith(
          savePlayers({
            players: [
              { bar: 'bar', foo: 'foo', foo_bar: 'foo' },
              { bar: 'bar' }
            ]
          })
        )
      })
    })

    describe('on failure', () => {
      beforeEach(async () => {
        axios.get.mockReturnValueOnce(Promise.reject(new Error('getPlayers failure')))
        await getPlayers()(dispatchMock)
      })

      it('logs error', () => {
        expect(console.error).toHaveBeenCalled()
      })

      it('does not dispatch `savePlayers` action', () => {
        expect(dispatchMock).not.toHaveBeenCalledWith(savePlayers([
          { baR: 'bar', foo: 'foo', fooBar: 'foo' },
          { bar: 'bar' }
        ]))
      })

      it('dispatches `errorOccured` action', () => {
        expect(actionCreators.errorOccured).toHaveBeenCalledWith(new Error('getPlayers failure'))
      })
    })
  })

  describe('#savePlayers', () => {
    it('returns correct action', () => {
      const action = savePlayers([{ foo: true, bar: true }])
      
      expect(action).toEqual({
        type: SAVE_PLAYERS,
        payload: [{ foo: true, bar: true }]
      })
    })
  })
})
