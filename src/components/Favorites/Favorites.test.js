import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './Favorites.js';

describe('Favorites', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Favorites favorites={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});