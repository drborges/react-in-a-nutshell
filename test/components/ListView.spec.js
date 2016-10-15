import { shallow } from 'enzyme'
import sinon from 'sinon'

import ListView from 'app/components/ListView'

describe('ListView', () => {

  it('Renders children elements', () => {
    const component = shallow(
      <ListView>
        <span>Diego</span>
        <span>Borges</span>
      </ListView>
    )

    expect(component.contains(<span>Diego</span>)).to.equal(true)
    expect(component.contains(<span>Borges</span>)).to.equal(true)
  })
})
