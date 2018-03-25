import React from 'react';
import {shallow} from 'enzyme';
import CardsContainer from './CardsContainer.js';

describe('CardsContainer', () => {
  const cards = [
    {
      name: "Luke Skywalker", 
      species: "Human", 
      homeWorldName: "Tatooine", 
      population: "200000"
    }, {
      name: "C-3PO",
      species: "Droid",
      homeWorldName: "Tatooine",
      population: "200000"
    }];

  it('should  not make any cards if array is empty', () => {
    let wrapper = shallow(<CardsContainer cards={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should create 2 cards', () => {
    let wrapper = shallow(<CardsContainer cards={cards}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

