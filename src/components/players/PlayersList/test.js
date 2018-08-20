import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PlayersList from './index'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  players: [{
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

describe('components/players/PlayersList', () => {
  describe('#PlayersList', () => {
    describe('matches snapshots', () => {
      it('when nothing in store', () => {
        const component = mount(<PlayersList players={[]} />)
        expect(component).toMatchSnapshot()
      })

      it('when players in store', () => {
        const component = mount(<PlayersList {...mockProps} />)
        expect(component).toMatchSnapshot()
      })
    })
  })
})
