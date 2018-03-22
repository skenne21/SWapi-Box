import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card.js';

describe('Card', () => {
  it('should render Planet Cards if passed correct props',() => {
    let wrapper = shallow(
      <Card
        name={'earth'}
        terrain={'ground'}
        population={1000}
        climate={'dry'}
        residents={[ 'bob', 'jim', 'joe']}
      />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should render people Cards if passed correct props',() => {
    let wrapper = shallow(
      <Card
        name={'sue'}
        homeWorldName={'earth'}
        species={'human'}
        population={'1000'}
      />)
    expect(wrapper).toMatchSnapshot();
  })

   it('should render vehicles Cards if passed correct props',() => {
    let wrapper = shallow(
      <Card
        name={'subru'}
        model={'red'}
        passengers={'5'}
        vehicleClass={'5 stars'}
      />)
    expect(wrapper).toMatchSnapshot();
  })

})