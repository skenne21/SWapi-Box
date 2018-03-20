import React from 'react';
import {shallow} from 'enzyme';
import Main from './Main.js';

describe('Main', () => {
  it('Should match the snapshot', () => {
    const film = {
      title: 'Attack of the clones',
      opening: 'It is a dark time for...',
      year: '2002'
    }
    const wrapper = shallow(<Main film={film} />)
    expect(wrapper).toMatchSnapshot();
  })
})