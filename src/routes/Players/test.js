import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Players, mapStateToProps } from './index'

Enzyme.configure({ adapter: new Adapter() })

const mockStore = {
  errors: { isError: false },
  players: {
    data: [{
        firstname: 'firstname 1',
        lastname: 'lastname 1',
        shortname: 'shortname 1',
        picture: 'picture 1'
      }, {
        firstname: 'firstname 2',
        lastname: 'lastname 2',
        shortname: 'shortname 2',
        picture: 'picture 2'
      }, {
        firstname: 'firstname 3',
        lastname: 'lastname 3',
        shortname: 'shortname 3',
        picture: 'picture 3'
      }
    ]
  }
}

describe('route/players', () => {
  describe('#players', () => {
    let mockActions
    let mockProps

    beforeEach(() => {
      mockActions = {
        getPlayers: jest.fn()
      }

      mockProps = mapStateToProps(mockStore)
    })

    describe('matches snapshots', () => {
      it('when error', () => {
        const component = mount(<Players {...mockActions} isError={true} />)
        expect(component).toMatchSnapshot()
      })

      it('when nothing in store', () => {
        const component = mount(<Players {...mockActions} isError={false} players={[]} />)
        expect(component).toMatchSnapshot()
      })

      it('when players in store', () => {
        const component = mount(<Players {...mockActions} {...mockProps} />)
        expect(component).toMatchSnapshot()
      })
    })
  })
})
