import React from 'react';
import {shallow} from 'enzyme';
import Main from './Main.js';

describe('Main', () => {
  it('Should  create a Scroll Text if the CardsArray is empty', () => {
    const film = {
      title: 'Attack of the clones',
      opening: 'It is a dark time for...',
      year: '2002'
    }
    const wrapper = shallow(
      <Main 
        film={film}
        cards={[]} 
      />)
    expect(wrapper).toMatchSnapshot();
  })

  it('Should create a cardsContainer component if there are items in the Cards array',() => {
    const cards= [{
      homeWorldName:"Tatooine",
      name:"Luke Skywalker",
      population:"200000",
      species:"Human",
    }]
    const wrapper = shallow(
      <Main 
        cards={cards} 
      />)
    expect(wrapper).toMatchSnapshot()
  })
})