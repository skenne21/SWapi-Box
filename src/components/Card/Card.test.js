import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card.js';

describe('Card', () => {
  const card = {
    class: 'people',
    name: "Luke Skywalker",
    info: {
      species: "Human", 
      homeWorldName: "Tatooine", 
      population: "200000"
    }    
  };
  const mockToggleFavs = jest.fn();

  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <Card 
        card={card}
        className={'people'}
        toggleFavorites={mockToggleFavs}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});