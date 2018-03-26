import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites.js';

describe('Favorites', () => {
  it('Should match the snapshot if the array is empty', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <Favorites 
        favorites={[]}
        showFavorites={mockFunction}
      />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('Should match the snapshot if the array has Cards', () => {
    const card = {
      class: 'people',
      name: "Luke Skywalker",
      info: {
        species: "species: Human", 
        homeWorldName:  "homeworld: Tatooine", 
        population: "Population: 200000"
      }
    };
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <Favorites 
        favorites={[card]}
        showFavorites={mockFunction}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});